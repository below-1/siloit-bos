import { faker } from '@faker-js/faker';

/** @type {import('./$types').PageServerLoad} */
export function load(options) {
  const fileURL = 'https://file-examples.com/wp-content/storage/2017/02/file_example_XLS_10.xls'
  const n = faker.number.int({ min: 15, max: 32 })
  const result = Array(n).fill(1).map((_, index) => {
    return {
      id: faker.number.int({ min: 1, max: 1000 }),
      title: faker.system.commonFileName('xlsx'),
      status: faker.helpers.arrayElement([
        'verified',
        'processing',
        'pending_ao'
      ]),
      fileSize: `${faker.number.float({ min: 2, max: 15, fractionDigits: 1 })}mb`,
      last_updated: faker.date.recent(),
      fileURL
    }
  })
  return {
    items: result
  };
}