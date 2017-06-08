import expect from 'expect';
import roles from '../../reducers/roleReducer';
import {
  CREATE_USER_ROLE_SUCCESS,
  LOAD_USER_ROLE_SUCCESS,
  DELETE_USER_ROLE_SUCCESS,
} from '../../actions/actionTypes';


describe('Roles Reducer', () => {
  it('should load all roles when passed LOAD_USER_ROLE_SUCCESS', () => {
    const initialState = [];
    const allRoles = [{
      id: '1',
      title: 'admin',
    },
    {
      id: '2',
      title: 'tester',
    },
    {
      id: '3',
      title: 'basic',
    },
    ];
    const expectedState = {
      allRoles: [{
        id: '1',
        title: 'admin',
      },
      {
        id: '2',
        title: 'tester',
      },
      {
        id: '3',
        title: 'basic',
      },
      ],
    };
    const action = {
      type: LOAD_USER_ROLE_SUCCESS,
      roles: allRoles,
    };
    const newState = roles(initialState, action);

    // Assertion
    expect(newState)
      .toEqual(expectedState);
  });

  it('should delete role when passed DELETE_USER_ROLE_SUCCESS', () => {
    const initialState = {
      allRoles: [{
        id: '1',
        title: 'admin',
      },
      {
        id: '2',
        title: 'regular',
      },
      {
        id: '3',
        title: 'editor',
      },
      ],
    };
    const role = {
      id: '2',
      name: 'New Role',
    };
    const roleId = '1';
    const action = {
      type: DELETE_USER_ROLE_SUCCESS,
      roleId,
    };

    const expectedState = {
      allRoles: [{
        id: '2',
        title: 'regular',
      },
      {
        id: '3',
        title: 'editor',
      },
      ],
    };
    const newState = roles(initialState, action);

    // Assertion
    expect(newState)
      .toEqual(expectedState);
  });

  it('should add role when passed CREATE_USER_ROLE_SUCCESS', () => {
    const initialState = [{
      title: 'admin',
    },
    {
      title: 'regular',
    },
    ];
    const newRole = {
      title: 'editor',
    };
    const action = {
      type: CREATE_USER_ROLE_SUCCESS,
      role: newRole,
    };

    const expectedState = [{
      title: 'admin',
    },
    {
      title: 'regular',
    },
    ];
    const newState = roles(initialState, action);

    // Assertion
    expect(newState)
      .toEqual(expectedState);
  });
});
