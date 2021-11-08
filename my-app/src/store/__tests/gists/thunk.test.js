import {
   getGists,
   getGistsStart,
   getGistsSucess,
   getGistsByNameStart,
   getGistsByNameSucess,
   getGistsByName
} from "../../gists"

describe("get gists thunk", () => {
  it("get gists success", async () => {
    const PAGE = 2

    const dipatch = jest.fn()
    const getGistsApi = jest.fn().mockResolvedValue({ data: "ok" })

    const thunk = getGists(PAGE)

    await thunk(dipatch, null, { getGistsApi })

    expect(getGistsApi).toBeCalledTimes(1)
    expect(getGistsApi).toBeCalledWith(PAGE)

    expect(dipatch).toBeCalledTimes(2)
    expect(dipatch).toHaveBeenNthCalledWith(1, getGistsStart())
    expect(dipatch).toHaveBeenNthCalledWith(2, getGistsSucess("ok"))
  })
})

describe("search gists thunk", () => {
  it("search gists success", async () => {
    const SEARCH = "test"
    const isCurrentQuery = true

    const dipatch = jest.fn()
    const searchGistsByUserNameApi = jest
      .fn()
      .mockResolvedValue({ data: SEARCH })

    const thunk = getGistsByName(SEARCH, isCurrentQuery)

    await thunk(dipatch, null, { searchGistsByUserNameApi })

    expect(searchGistsByUserNameApi).toBeCalledTimes(1)
    expect(searchGistsByUserNameApi).toBeCalledWith(SEARCH)

    expect(dipatch).toBeCalledTimes(2)
    expect(dipatch).toHaveBeenNthCalledWith(1,  getGistsByNameStart())
    expect(dipatch).toHaveBeenNthCalledWith(2, getGistsByNameSucess(SEARCH))
  })
})
