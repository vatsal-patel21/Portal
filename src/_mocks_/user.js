import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';
import userData from './user.json';
// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  // name: faker.name.findName(),
  name: userData[index].name,
  // company: faker.company.companyName(),
  company: userData[index].school,
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  // role: sample([
  //   'English',
  //   'Mathematics',
  //   'Social Science',
  //   'Science',
  //   'Physics',
  //   'Gujarati',
  //   'Hindi',
  //   'Computer',
  //   'Sports',
  //   'Chemistry',
  //   'Biology'
  // ])
  role: userData[index].role
}));

export default users;
