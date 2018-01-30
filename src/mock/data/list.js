import mock from 'mockjs'
const list = []
for (let i = 0; i < 100; i++) {
  list.push(mock.mock({
    id: `${i}`,
    name: `@city`,
    image: `@IMG('150x100', '@color')`,
    price: `1300`
  }))
}
export default list
