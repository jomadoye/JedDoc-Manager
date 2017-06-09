import expect from 'expect';
import reducers from '../../reducers/';
import helperReducers from '../helpers/reducerHelpers';

let expectedState1 = helperReducers.DELETE_SINGLE_USER_SUCCESS_EXPECTED_STATE;
let expectedState2 = helperReducers.LOAD_ALL_DOCUMENTS_SUCCESS;
let expectedState3 = helperReducers.LOAD_ALL_USERS_SUCCESS;
let expectedState4 = helperReducers.UPDATE_SINGLE_USER_BY_ADMIN_SUCCESS;


describe('Admin Reducers', () => {
  it('should handle DELETE_SINGLE_USER_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 4,
          username: 'q',
          fullname: 'q',
          roleId: 1,
          email: 'qq1be@email.com',
        },
        allUsers: {
          count: 6,
          page: 1,
          pageCount: 1,
          pageSize: 6,
          totalCount: 6,
          users: [{
            id: 21,
            fullname: 'Alvah Shanahan',
            username: 'Jacynthe.Will',
            email: 'Geraldine79@gmail.com',
            roleId: 2,
            password: '$2a$08$TMey3z1W6b1pbtD3qvdjauU7686vQlcwFxs15KNwaXp8weB4t8xr2',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 1,
            fullname: 'Samara Stracke PhD',
            username: 'Max_Borer',
            email: 'Reyna.Torphy@hotmail.com',
            roleId: 3,
            password: '$2a$08$KPhQp3dHfCaDEoAZ6KmXiukUOwMDsvm9poOJNCI1tpk5sZoYEs4my',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 2,
            fullname: 'jonathan doe',
            username: 'john doe',
            email: 'Tania92@yahoo.com',
            roleId: 3,
            password: '$2a$08$76j1vujLbWLdS8K3zCgiGes/OP.lxzMyWDRL7dw6.fej5SBlvuVxi',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 3,
            fullname: 'dede',
            username: 'dede',
            email: 'Frederique44@yahoo.com',
            roleId: 1,
            password: '$2a$08$xiJEybtOvPA163fka4Ma6.A/5M4TvKskpqy2HMmydl6JS6vx/arAu',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 4,
            fullname: 'q',
            username: 'q',
            email: 'qq1be@email.com',
            roleId: 1,
            password: '$2a$08$EyNLxwbvwENfI.yf/zswLOpY2ysC6XKEqEqgYQABNhLMtU9MtHrDq',
            createdAt: '2017-06-05T11:55:11.608Z',
            updatedAt: '2017-06-05T11:55:11.608Z',
          }, {
            id: 20,
            fullname: 'Curt Walter',
            username: 'Kade_Rempel68',
            email: 'Gabriel.Goldner83@hotmail.com',
            roleId: 2,
            password: '$2a$08$vGRhr8ZKerc1jPTW2KHo0uoVFX.rJRP0ZhFFbQIXAa6c0YznWIdY.',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-06T12:44:06.350Z',
          }],
        },
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: [],
        AuthToViewDocuments: [],
        allDocuments: [],
      },
      user: [],
      role: [],
    }, {
      type: 'DELETE_SINGLE_USER_SUCCESS',
      userId: 21,
    });

    // Asertion
    expect(state)
      .toEqual(expectedState1);
  });

  it('should handle LOAD_ALL_DOCUMENTS_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 12,
          username: 'qq',
          fullname: 'qq',
          roleId: 1,
          email: 'qq1e@email.com',
        },
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: [],
        AuthToViewDocuments: [],
        allDocuments: {
          count: 10,
          page: 1,
          pageCount: 2,
          pageSize: 8,
          totalCount: 10,
          documents: [{
            id: 9,
            title: 'test document 8',
            body: 'Distinctio laudantium reiciendis et. Qui quasi suscipit quia expedita ducimus aut recusandae. Cumque ut sit.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-26T16:41:07.867Z',
            updatedAt: '2017-05-26T16:41:07.867Z',
            userId: 12,
            User: {
              fullname: 'qq',
            },
          }, {
            id: 13,
            title: 'test document 12',
            body: 'Magnam quo aut ipsam amet modi maxime sint. Vel minus dolorum alias. Voluptatem et harum dicta optio iste accusamus rerum est. Magnam labore ut rerum et error nemo quia. Qui animi omnis ab laborum illum esse nemo. Facere neque rerum voluptas in tempore voluptatibus et nisi velit.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-26T16:41:07.867Z',
            updatedAt: '2017-05-26T16:41:07.867Z',
            userId: 12,
            User: {
              fullname: 'qq',
            },
          }, {
            id: 15,
            title: 'test document 14',
            body: 'Laboriosam amet aliquam mollitia magnam aliquam eos. Laboriosam consectetur fuga iure expedita sed officiis ut. Esse qui ut. Aut illum non ipsam voluptatem. Aperiam non voluptas dolores animi voluptas voluptas ut.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-26T16:41:07.867Z',
            updatedAt: '2017-05-26T16:41:07.867Z',
            userId: 12,
            User: {
              fullname: 'qq',
            },
          }, {
            id: 16,
            title: 'test document 15',
            body: 'Pariatur fuga non suscipit accusantium. Hic quaerat aliquam commodi quos cum voluptas consequatur excepturi. Ipsam iure rem earum ut itaque.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-26T16:41:07.867Z',
            updatedAt: '2017-05-26T16:41:07.867Z',
            userId: 12,
            User: {
              fullname: 'qq',
            },
          }, {
            id: 17,
            title: 'test document 16',
            body: 'Aut delectus magnam doloribus necessitatibus. Eos tempora nobis hic nesciunt sapiente nihil nobis blanditiis porro. Dicta aut dicta. Blanditiis aut architecto est.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-26T16:41:07.867Z',
            updatedAt: '2017-05-26T16:41:07.867Z',
            userId: 12,
            User: {
              fullname: 'qq',
            },
          }, {
            id: 19,
            title: 'test document 18',
            body: 'Ut aut est aut ex sed. Nemo nobis perspiciatis autem odio et nihil voluptatem temporibus. Accusantium dolor aliquid nihil ut dolore nihil culpa quia.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-26T16:41:07.867Z',
            updatedAt: '2017-05-26T16:41:07.867Z',
            userId: 12,
            User: {
              fullname: 'qq',
            },
          }, {
            id: 18,
            title: 'test document 17',
            body: 'Velit soluta qui quasi sit et nulla in reiciendis amet. Qui delectus quam ut excepturi vitae hic. Dolorem aut maiores corporis facere. Alias maxime doloremque molestiae. Rerum molestiae ad vel voluptatem rerum aperiam necessitatibus iure minima.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-26T16:41:07.867Z',
            updatedAt: '2017-05-26T16:41:07.867Z',
            userId: 12,
            User: {
              fullname: 'qq',
            },
          }, {
            id: 6,
            title: 'test document 53',
            body: 'Aspernatur commodi odio quibusdam expedita harum enim quaerat modi. Sint nihil possimus sit atque quibusdam. Deleniti repellendus illum repellendus ut et quos est autem. Accusantium qui maxime ipsam labore voluptatem id ea. Cumque pariatur voluptatem illum et porro quas et minus molestiae. In fuga quasi.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-26T16:41:07.867Z',
            updatedAt: '2017-06-01T11:52:19.178Z',
            userId: 12,
            User: {
              fullname: 'qq',
            },
          }],
        },
      },
      user: [],
      role: [],
    }, {
      type: 'LOAD_ALL_DOCUMENTS_SUCCESS',
      allDocuments: [{
        id: 8,
        title: 'test document 7r',
        body: 'Voluptatibus et quos ut culpa mollitia amet voluptas ratione id. Error nesciunt eos libero ratione. Aliquam dolore qui similique nemo qui dolorem et. Omnis praesentium ducimus maiores cum.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-26T16:41:07.867Z',
        updatedAt: '2017-06-01T15:29:34.760Z',
        userId: 12,
        User: {
          fullname: 'qq',
        },
      }, {
        id: 7,
        title: 'test document 6e',
        body: 'Aspernatur eum at dolor quae. Quo dignissimos rerum voluptas ducimus sit. Nihil minus sed dolores delectus earum error cumque. Quod dolorem ullam repellendus facere architecto.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-26T16:41:07.867Z',
        updatedAt: '2017-06-01T15:30:34.285Z',
        userId: 12,
        User: {
          fullname: 'qq',
        },
      }],
      metadata: {
        page: 2,
        pageCount: 2,
        pageSize: 2,
        totalCount: 10,
      },
      count: 10,
    });

    // Asertion
    expect(state)
      .toEqual(expectedState2);
  });

  it('should handle LOAD_ALL_USERS_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 4,
          username: 'q',
          fullname: 'q',
          roleId: 1,
          email: 'qq1be@email.com',
        },
        allUsers: {
          count: 6,
          page: null,
          pageCount: null,
          pageSize: null,
          totalCount: 6,
          users: [{
            id: 21,
            fullname: 'Alvah Shanahan',
            username: 'Jacynthe.Will',
            email: 'Geraldine79@gmail.com',
            roleId: 2,
            password: '$2a$08$TMey3z1W6b1pbtD3qvdjauU7686vQlcwFxs15KNwaXp8weB4t8xr2',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 1,
            fullname: 'Samara Stracke PhD',
            username: 'Max_Borer',
            email: 'Reyna.Torphy@hotmail.com',
            roleId: 3,
            password: '$2a$08$KPhQp3dHfCaDEoAZ6KmXiukUOwMDsvm9poOJNCI1tpk5sZoYEs4my',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 2,
            fullname: 'jonathan doe',
            username: 'john doe',
            email: 'Tania92@yahoo.com',
            roleId: 3,
            password: '$2a$08$76j1vujLbWLdS8K3zCgiGes/OP.lxzMyWDRL7dw6.fej5SBlvuVxi',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 3,
            fullname: 'dede',
            username: 'dede',
            email: 'Frederique44@yahoo.com',
            roleId: 1,
            password: '$2a$08$xiJEybtOvPA163fka4Ma6.A/5M4TvKskpqy2HMmydl6JS6vx/arAu',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 4,
            fullname: 'q',
            username: 'q',
            email: 'qq1be@email.com',
            roleId: 1,
            password: '$2a$08$EyNLxwbvwENfI.yf/zswLOpY2ysC6XKEqEqgYQABNhLMtU9MtHrDq',
            createdAt: '2017-06-05T11:55:11.608Z',
            updatedAt: '2017-06-05T11:55:11.608Z',
          }, {
            id: 20,
            fullname: 'Curt Walter',
            username: 'Kade_Rempel68',
            email: 'Gabriel.Goldner83@hotmail.com',
            roleId: 2,
            password: '$2a$08$vGRhr8ZKerc1jPTW2KHo0uoVFX.rJRP0ZhFFbQIXAa6c0YznWIdY.',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-06T12:44:06.350Z',
          }],
        },
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: [],
        AuthToViewDocuments: [],
        allDocuments: [],
      },
      user: [],
      role: [],
    }, {
      type: 'LOAD_ALL_USERS_SUCCESS',
      users: [{
        id: 21,
        fullname: 'Alvah Shanahan',
        username: 'Jacynthe.Will',
        email: 'Geraldine79@gmail.com',
        roleId: 2,
        password: '$2a$08$TMey3z1W6b1pbtD3qvdjauU7686vQlcwFxs15KNwaXp8weB4t8xr2',
        createdAt: '2017-06-05T11:53:33.313Z',
        updatedAt: '2017-06-05T11:53:33.321Z',
      }, {
        id: 1,
        fullname: 'Samara Stracke PhD',
        username: 'Max_Borer',
        email: 'Reyna.Torphy@hotmail.com',
        roleId: 3,
        password: '$2a$08$KPhQp3dHfCaDEoAZ6KmXiukUOwMDsvm9poOJNCI1tpk5sZoYEs4my',
        createdAt: '2017-06-05T11:53:33.313Z',
        updatedAt: '2017-06-05T11:53:33.321Z',
      }, {
        id: 2,
        fullname: 'jonathan doe',
        username: 'john doe',
        email: 'Tania92@yahoo.com',
        roleId: 3,
        password: '$2a$08$76j1vujLbWLdS8K3zCgiGes/OP.lxzMyWDRL7dw6.fej5SBlvuVxi',
        createdAt: '2017-06-05T11:53:33.313Z',
        updatedAt: '2017-06-05T11:53:33.321Z',
      }, {
        id: 3,
        fullname: 'dede',
        username: 'dede',
        email: 'Frederique44@yahoo.com',
        roleId: 1,
        password: '$2a$08$xiJEybtOvPA163fka4Ma6.A/5M4TvKskpqy2HMmydl6JS6vx/arAu',
        createdAt: '2017-06-05T11:53:33.313Z',
        updatedAt: '2017-06-05T11:53:33.321Z',
      }, {
        id: 4,
        fullname: 'q',
        username: 'q',
        email: 'qq1be@email.com',
        roleId: 1,
        password: '$2a$08$EyNLxwbvwENfI.yf/zswLOpY2ysC6XKEqEqgYQABNhLMtU9MtHrDq',
        createdAt: '2017-06-05T11:55:11.608Z',
        updatedAt: '2017-06-05T11:55:11.608Z',
      }, {
        id: 20,
        fullname: 'Curt Walter',
        username: 'Kade_Rempel68',
        email: 'Gabriel.Goldner83@hotmail.com',
        roleId: 2,
        password: '$2a$08$vGRhr8ZKerc1jPTW2KHo0uoVFX.rJRP0ZhFFbQIXAa6c0YznWIdY.',
        createdAt: '2017-06-05T11:53:33.313Z',
        updatedAt: '2017-06-06T12:44:06.350Z',
      }],
      metadata: {
        page: 1,
        pageCount: 1,
        pageSize: 6,
        totalCount: 6,
      },
      count: 6,
    });

    // Asertion
    expect(state)
      .toEqual(expectedState3);
  });

  it('should handle UPDATE_SINGLE_USER_BY_ADMIN_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 4,
          username: 'q',
          fullname: 'q',
          roleId: 1,
          email: 'qq1be@email.com',
        },
        allUsers: {
          count: 6,
          page: 1,
          pageCount: 1,
          pageSize: 6,
          totalCount: 6,
          users: [{
            id: 20,
            fullname: 'Curt Walter',
            username: 'Kade_Rempel68',
            email: 'Gabriel.Goldner83@hotmail.com',
            roleId: 1,
            password: '$2a$08$O9Ggbyt8xHJmjAm.u9gunertivFDF5YOyJEWUrMoCe3fZmAxYZT6.',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 21,
            fullname: 'Alvah Shanahan',
            username: 'Jacynthe.Will',
            email: 'Geraldine79@gmail.com',
            roleId: 2,
            password: '$2a$08$TMey3z1W6b1pbtD3qvdjauU7686vQlcwFxs15KNwaXp8weB4t8xr2',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 1,
            fullname: 'Samara Stracke PhD',
            username: 'Max_Borer',
            email: 'Reyna.Torphy@hotmail.com',
            roleId: 3,
            password: '$2a$08$KPhQp3dHfCaDEoAZ6KmXiukUOwMDsvm9poOJNCI1tpk5sZoYEs4my',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 2,
            fullname: 'jonathan doe',
            username: 'john doe',
            email: 'Tania92@yahoo.com',
            roleId: 3,
            password: '$2a$08$76j1vujLbWLdS8K3zCgiGes/OP.lxzMyWDRL7dw6.fej5SBlvuVxi',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 3,
            fullname: 'dede',
            username: 'dede',
            email: 'Frederique44@yahoo.com',
            roleId: 1,
            password: '$2a$08$xiJEybtOvPA163fka4Ma6.A/5M4TvKskpqy2HMmydl6JS6vx/arAu',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 4,
            fullname: 'q',
            username: 'q',
            email: 'qq1be@email.com',
            roleId: 1,
            password: '$2a$08$EyNLxwbvwENfI.yf/zswLOpY2ysC6XKEqEqgYQABNhLMtU9MtHrDq',
            createdAt: '2017-06-05T11:55:11.608Z',
            updatedAt: '2017-06-05T11:55:11.608Z',
          }],
        },
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: [],
        AuthToViewDocuments: [],
        allDocuments: [],
      },
      user: [],
      role: [],
    }, {
      type: 'UPDATE_SINGLE_USER_BY_ADMIN_SUCCESS',
      userId: 20,
      updatedUser: {
        fullname: 'Curt Walter',
        username: 'Kade_Rempel68',
        email: 'Gabriel.Goldner83@hotmail.com',
        roleId: '2',
      },
    });

    // Asertion
    expect(state)
      .toEqual(expectedState4);
  });
});
