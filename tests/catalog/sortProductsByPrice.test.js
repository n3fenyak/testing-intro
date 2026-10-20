const products = require('../../src/data/products')
const { sortProductsByPrice } = require('../../src/catalog')

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products, 'asc')
    const ids = result.map((product) => product.id)

    expect(ids).toEqual([3, 6, 5, 4, 2, 1])
  })

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const result = sortProductsByPrice(products)
    const ids = result.map((product) => product.id)

    expect(ids).toEqual([3, 6, 5, 4, 2, 1])
  })

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const selectedProducts = products.filter((product) => {
      return [1, 3, 4].includes(product.id)
    })

    const result = sortProductsByPrice(selectedProducts, 'asc')
    const ids = result.map((product) => product.id)

    expect(ids).toEqual([3, 4, 1])
  })

  test("все товары с 'desc' сортируются по убыванию цены", () => {
    const result = sortProductsByPrice(products, 'desc')
    const ids = result.map((product) => product.id)

    expect(ids).toEqual([1, 2, 4, 5, 6, 3])
  })
  test("товары [3, 1, 4] с 'desc' сортируются как [1, 4, 3]", () => {
    const selectedProducts = [3, 1, 4].map((id) =>
      products.find((product) => product.id === id)
    )
    const result = sortProductsByPrice(selectedProducts, 'desc')
    const ids = result.map((product) => product.id)

    expect(ids).toEqual([1, 4, 3])
  })
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const selectedProducts = [5, 2, 6].map((id) =>
      products.find((product) => product.id === id)
    )
    const result = sortProductsByPrice(selectedProducts, 'desc')
    const ids = result.map((product) => product.id)

    expect(ids).toEqual([2, 5, 6])
  })

  test("сортировка 'asc' не изменяет исходный массив [1, 3, 4]", () => {
    const selectedProducts = [1, 3, 4].map((id) =>
      products.find((product) => product.id === id)
    )

    sortProductsByPrice(selectedProducts, 'asc')

    const ids = selectedProducts.map((product) => product.id)
    expect(ids).toEqual([1, 3, 4])
  })

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = [1, 3, 4].map((id) =>
      products.find((product) => product.id === id)
    )

    sortProductsByPrice(selectedProducts, 'desc')

    const ids = selectedProducts.map((product) => product.id)
    expect(ids).toEqual([1, 3, 4])
  })

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    sortProductsByPrice(products)

    const ids = products.map((product) => product.id)

    expect(ids).toEqual([1, 2, 3, 4, 5, 6])
  })
})
