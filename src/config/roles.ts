enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

const allRoles = {
  [Role.USER]: [],
  [Role.ADMIN]: ['getUsers', 'manageUsers'],
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));

