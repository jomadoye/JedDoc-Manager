import expect from 'expect';
import reducers from '../../reducers/';

describe('Admin Reducers', () => {
  it('should handle UPDATE_USER_BY_ADMIN_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [{
        id: 1,
        text: 'User updated successfully.',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 20,
          fullname: 'Brenna Konopelskia',
          username: 'Furman67',
          email: 'Litzy_Kutch24@hotmail.com',
          roleId: 1,
          password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:36:39.503Z',
          documents: [],
        },
        allUsers: [{
          id: 20,
          fullname: 'Brenna Konopelski',
          username: 'Furman67',
          email: 'Litzy_Kutch24@hotmail.com',
          roleId: 1,
          password: '$2a$08$xmuoeri3Du9aO4Y58rbUT.m5DILMUL/2MwsVpozu5pC2gyHaAaXKO',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:34:31.096Z',
        }, {
          id: 21,
          fullname: 'Furman Ritchie',
          username: 'Gideon_Price37',
          email: 'Simeon78@hotmail.com',
          roleId: 2,
          password: '$2a$08$p.OkWwcOqsmj93AZzwt4XehVD3r1RiAOqxVsS3sX4rCPREKLS0GJi',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:34:31.097Z',
        }, {
          id: 1,
          fullname: 'jonathan doe',
          username: 'john doe',
          email: 'Lauren52@hotmail.com',
          roleId: 3,
          password: '$2a$08$wR9H1v9aTlotDRbghNFvvO2Q4C7Kgp9ALlhUf/1XcOci41iFIBVLG',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:34:31.097Z',
        }, {
          id: 2,
          fullname: 'Bill Rosenbaum',
          username: 'Baron.Schamberger',
          email: 'Alexanne_OKon25@hotmail.com',
          roleId: 3,
          password: '$2a$08$37RnX6KymnY4WPE2nNcaIukhQv3KGLYmqLuKOir08s6fysWb36FBS',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:34:31.097Z',
        }, {
          id: 3,
          fullname: 'q',
          username: 'q',
          email: 'qq1be@email.com',
          roleId: 1,
          password: '$2a$08$/wc8Z.1yhODSKT9JN7t2EeFQ9pjwnnsVzYBirGcuscL9Z0rsMqIXW',
          createdAt: '2017-05-20T14:35:51.928Z',
          updatedAt: '2017-05-20T14:35:51.928Z',
        }],
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
      type: 'UPDATE_USER_PROFILE_BY_ADMIN_SUCCESS',
      updatedUser: {
        id: 20,
        fullname: 'Brenna Konopelskia',
        username: 'Furman67',
        email: 'Litzy_Kutch24@hotmail.com',
        roleId: 1,
        password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.',
        createdAt: '2017-05-20T14:34:31.085Z',
        updatedAt: '2017-05-20T14:36:39.503Z',
        documents: [],
      },
      userId: 20,
    });
    expect(state)
      .toEqual({
        flashMessages: [{
          id: 1,
          text: 'User updated successfully.',
        }],
        login: {
          isAuthenticated: true,
          user: {
            id: 20,
            fullname: 'Brenna Konopelskia',
            username: 'Furman67',
            email: 'Litzy_Kutch24@hotmail.com',
            roleId: 1,
            password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.',
            createdAt: '2017-05-20T14:34:31.085Z',
            updatedAt: '2017-05-20T14:36:39.503Z',
            documents: [],
          },
          allUsers: [{
            id: 21,
            fullname: 'Furman Ritchie',
            username: 'Gideon_Price37',
            email: 'Simeon78@hotmail.com',
            roleId: 2,
            password: '$2a$08$p.OkWwcOqsmj93AZzwt4XehVD3r1RiAOqxVsS3sX4rCPREKLS0GJi',
            createdAt: '2017-05-20T14:34:31.085Z',
            updatedAt: '2017-05-20T14:34:31.097Z',
          }, {
            id: 1,
            fullname: 'jonathan doe',
            username: 'john doe',
            email: 'Lauren52@hotmail.com',
            roleId: 3,
            password: '$2a$08$wR9H1v9aTlotDRbghNFvvO2Q4C7Kgp9ALlhUf/1XcOci41iFIBVLG',
            createdAt: '2017-05-20T14:34:31.085Z',
            updatedAt: '2017-05-20T14:34:31.097Z',
          }, {
            id: 2,
            fullname: 'Bill Rosenbaum',
            username: 'Baron.Schamberger',
            email: 'Alexanne_OKon25@hotmail.com',
            roleId: 3,
            password: '$2a$08$37RnX6KymnY4WPE2nNcaIukhQv3KGLYmqLuKOir08s6fysWb36FBS',
            createdAt: '2017-05-20T14:34:31.085Z',
            updatedAt: '2017-05-20T14:34:31.097Z',
          }, {
            id: 3,
            fullname: 'q',
            username: 'q',
            email: 'qq1be@email.com',
            roleId: 1,
            password: '$2a$08$/wc8Z.1yhODSKT9JN7t2EeFQ9pjwnnsVzYBirGcuscL9Z0rsMqIXW',
            createdAt: '2017-05-20T14:35:51.928Z',
            updatedAt: '2017-05-20T14:35:51.928Z',
          }, {
            id: 20,
            fullname: 'Brenna Konopelskia',
            username: 'Furman67',
            email: 'Litzy_Kutch24@hotmail.com',
            roleId: 1,
            password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.',
            createdAt: '2017-05-20T14:34:31.085Z',
            updatedAt: '2017-05-20T14:36:39.503Z',
            documents: [],
          }],
        },
        documents: {
          PublicDocuments: [],
          MyDocuments: [],
          AuthToViewDocuments: [],
          allDocuments: [],
        },
        user: [],
        role: [],
      });
  });

  it('should handle DELETE_SINGLE_USER_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 20,
          fullname: 'Brenna Konopelskia',
          username: 'Furman67',
          email: 'Litzy_Kutch24@hotmail.com',
          roleId: 1,
          password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:36:39.503Z',
          documents: [],
        },
        allUsers: [{
          id: 21,
          fullname: 'Furman Ritchie',
          username: 'Gideon_Price37',
          email: 'Simeon78@hotmail.com',
          roleId: 2,
          password: '$2a$08$p.OkWwcOqsmj93AZzwt4XehVD3r1RiAOqxVsS3sX4rCPREKLS0GJi',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:34:31.097Z',
        }, {
          id: 1,
          fullname: 'jonathan doe',
          username: 'john doe',
          email: 'Lauren52@hotmail.com',
          roleId: 3,
          password: '$2a$08$wR9H1v9aTlotDRbghNFvvO2Q4C7Kgp9ALlhUf/1XcOci41iFIBVLG',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:34:31.097Z',
        }, {
          id: 2,
          fullname: 'Bill Rosenbaum',
          username: 'Baron.Schamberger',
          email: 'Alexanne_OKon25@hotmail.com',
          roleId: 3,
          password: '$2a$08$37RnX6KymnY4WPE2nNcaIukhQv3KGLYmqLuKOir08s6fysWb36FBS',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:34:31.097Z',
        }, {
          id: 3,
          fullname: 'q',
          username: 'q',
          email: 'qq1be@email.com',
          roleId: 1,
          password: '$2a$08$/wc8Z.1yhODSKT9JN7t2EeFQ9pjwnnsVzYBirGcuscL9Z0rsMqIXW',
          createdAt: '2017-05-20T14:35:51.928Z',
          updatedAt: '2017-05-20T14:35:51.928Z',
        }, {
          id: 20,
          fullname: 'Brenna Konopelskia',
          username: 'Furman67',
          email: 'Litzy_Kutch24@hotmail.com',
          roleId: 1,
          password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:36:39.503Z',
          documents: [],
        }],
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
    expect(state)
      .toEqual({
        flashMessages: [],
        login: {
          isAuthenticated: true,
          user: {
            id: 20,
            fullname: 'Brenna Konopelskia',
            username: 'Furman67',
            email: 'Litzy_Kutch24@hotmail.com',
            roleId: 1,
            password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.',
            createdAt: '2017-05-20T14:34:31.085Z',
            updatedAt: '2017-05-20T14:36:39.503Z',
            documents: [],
          },
          allUsers: [{
            id: 1,
            fullname: 'jonathan doe',
            username: 'john doe',
            email: 'Lauren52@hotmail.com',
            roleId: 3,
            password: '$2a$08$wR9H1v9aTlotDRbghNFvvO2Q4C7Kgp9ALlhUf/1XcOci41iFIBVLG',
            createdAt: '2017-05-20T14:34:31.085Z',
            updatedAt: '2017-05-20T14:34:31.097Z',
          }, {
            id: 2,
            fullname: 'Bill Rosenbaum',
            username: 'Baron.Schamberger',
            email: 'Alexanne_OKon25@hotmail.com',
            roleId: 3,
            password: '$2a$08$37RnX6KymnY4WPE2nNcaIukhQv3KGLYmqLuKOir08s6fysWb36FBS',
            createdAt: '2017-05-20T14:34:31.085Z',
            updatedAt: '2017-05-20T14:34:31.097Z',
          }, {
            id: 3,
            fullname: 'q',
            username: 'q',
            email: 'qq1be@email.com',
            roleId: 1,
            password: '$2a$08$/wc8Z.1yhODSKT9JN7t2EeFQ9pjwnnsVzYBirGcuscL9Z0rsMqIXW',
            createdAt: '2017-05-20T14:35:51.928Z',
            updatedAt: '2017-05-20T14:35:51.928Z',
          }, {
            id: 20,
            fullname: 'Brenna Konopelskia',
            username: 'Furman67',
            email: 'Litzy_Kutch24@hotmail.com',
            roleId: 1,
            password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.',
            createdAt: '2017-05-20T14:34:31.085Z',
            updatedAt: '2017-05-20T14:36:39.503Z',
            documents: [],
          }],
        },
        documents: {
          PublicDocuments: [],
          MyDocuments: [],
          AuthToViewDocuments: [],
          allDocuments: [],
        },
        user: [],
        role: [],
      });
  });

  it('should handle DELETE_USER_DOCUMENT_BY_ADMIN_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [{
        id: 1,
        text: 'Document deleted successfully.',
      }, {
        id: 1,
        text: 'Document deleted successfully.',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 3,
          username: 'q',
          fullname: 'q',
          roleId: 1,
          email: 'qq1be@email.com',
        },
      },
      documents: {
        MyDocuments: [],
      },
      user: [],
      role: [],
    }, {
      type: 'DELETE_USER_DOCUMENT_SUCCESS',
      documentId: 4,
    });
    expect(state)
      .toEqual({
        flashMessages: [{
          id: 1,
          text: 'Document deleted successfully.',
        }, {
          id: 1,
          text: 'Document deleted successfully.',
        }],
        login: {
          isAuthenticated: true,
          user: {
            id: 3,
            username: 'q',
            fullname: 'q',
            roleId: 1,
            email: 'qq1be@email.com',
          },
        },
        documents: {
          MyDocuments: [],
        },
        user: [],
        role: [],
      });
  });

  it('should handle LOAD_ALL_DOCUMENTS_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 3,
          username: 'q',
          fullname: 'q',
          roleId: 1,
          email: 'qq1be@email.com',
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
      type: 'LOAD_ALL_DOCUMENTS_SUCCESS',
      allDocuments: [{
        id: 1,
        title: 'pariatur esse molestiae',
        body: 'Sit autem doloremque laboriosam qui commodi provident reprehenderit.',
        access: 'private',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 5,
        title: 'test document 4',
        body: 'Sunt voluptatum nihil aut unde eum omnis. Maiores debitis corrupti et quos. Sit voluptas delectus at aut facere. Itaque atque et delectus at at voluptas at. Delectus amet placeat perspiciatis qui id corrupti. Qui voluptas assumenda est reiciendis magnam tempora.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 6,
        title: 'test document 5',
        body: 'In nesciunt cupiditate doloremque rem est quo et voluptatem reiciendis. Nesciunt doloribus et suscipit ea voluptate. Id ut praesentium reprehenderit aut velit eaque et harum laudantium. Quos ut veniam ut earum voluptatem sit et. Autem tempore molestias ratione odit non nihil dignissimos aspernatur consequatur. Vel iste voluptas nobis rerum veritatis aliquam voluptatum quaerat.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 7,
        title: 'test document 6',
        body: 'Dolores maiores ullam hic placeat. Delectus sed esse voluptas ducimus itaque enim. Rerum voluptas necessitatibus dolor cumque dolores.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 8,
        title: 'test document 7',
        body: 'Odio id itaque molestias ut eligendi. Fuga odio soluta velit neque aliquam. Aut odio nam est soluta quam.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 9,
        title: 'test document 8',
        body: 'Aut provident consequatur quia cum natus eos id sed eum. Omnis suscipit velit aspernatur. Vitae aspernatur reiciendis assumenda aut sunt.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 10,
        title: 'test document 9',
        body: 'Optio voluptate iure eum sit laborum voluptas. Qui tempora impedit mollitia ut nesciunt placeat sunt repudiandae. Tenetur rerum aspernatur praesentium officia cumque architecto est id. Et quidem similique eum eos voluptas. Aut necessitatibus voluptatem debitis qui neque. Dolor nostrum voluptatem vero quia cum dolores.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 11,
        title: 'test document 10',
        body: 'Quaerat amet vel explicabo voluptatibus sapiente sunt quibusdam mollitia in. Adipisci et est quis laborum et omnis hic blanditiis est. Aut ut est vel ut eos neque. Dolore est delectus sed blanditiis veniam dolorem ducimus.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 12,
        title: 'test document 11',
        body: 'Ratione voluptatum explicabo. Nihil illum eum qui atque reprehenderit. Quae delectus est et quam voluptatem voluptatum quia.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 13,
        title: 'test document 12',
        body: 'Earum necessitatibus consequatur error et fugiat aut rem. Illo facilis praesentium voluptas saepe adipisci. Qui aut ea quis amet consectetur velit consequatur impedit dolorem. Corrupti repellendus quae voluptate animi voluptas saepe dolores eius quisquam.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 14,
        title: 'test document 13',
        body: 'Nesciunt aperiam officiis quo facere atque optio in qui. Corporis quia aliquid iure eum deserunt rerum nulla consequatur. Dolorem placeat nisi sit consequatur velit placeat autem at.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 15,
        title: 'test document 14',
        body: 'Et laborum rerum et sunt. Et voluptatem consectetur est reiciendis repellendus voluptate. Nesciunt nobis voluptatem quaerat ducimus libero voluptate quasi. Assumenda quisquam nisi. Et pariatur sunt et explicabo tenetur quos enim numquam consequatur.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 16,
        title: 'test document 15',
        body: 'Qui est nihil eveniet. Sit porro unde et quisquam temporibus. Repellendus rerum officia voluptas. Possimus adipisci ut reprehenderit ex soluta ut deserunt autem consequatur.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 17,
        title: 'test document 16',
        body: 'Laboriosam eum aut. Blanditiis quia eaque est autem deserunt omnis optio minus commodi. Non aut soluta commodi delectus soluta at autem libero. Consequatur asperiores aut accusantium aut et voluptas. Doloremque accusamus qui voluptatem suscipit fuga aperiam soluta. Non in perspiciatis sunt rerum voluptatem consequatur saepe.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 18,
        title: 'test document 17',
        body: 'Rerum nemo non veritatis minus nesciunt facilis sint et. Error illum aut saepe perspiciatis deserunt repudiandae officia amet veniam. Velit sint assumenda omnis ut atque error sint quo. Suscipit corrupti minima. Ad magnam necessitatibus repudiandae reiciendis vel temporibus. Aut reiciendis dicta a voluptas aut nam sint hic modi.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 19,
        title: 'test document 18',
        body: 'Iure non repudiandae vitae dolorem aut. Dolorum ratione animi. Blanditiis laboriosam dolores minima ipsam. Quae ut sequi. Ut ullam nihil nostrum. Praesentium praesentium vero non tempora minima.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:34:31.237Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }, {
        id: 2,
        title: 'Fake title documentddddd',
        body: 'Corporis non omnis quisquam eum qui sed quidem incidunt itaque. Nihil ad aperiam qui qui consequuntur qui sit. Enim tempore doloribus consequatur hic sint ullam et veritatis corrupti.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-20T14:34:31.237Z',
        updatedAt: '2017-05-20T14:39:09.220Z',
        userId: 1,
        User: {
          fullname: 'jonathan doe',
        },
      }],
    });
    expect(state)
      .toEqual({
        flashMessages: [],
        login: {
          isAuthenticated: true,
          user: {
            id: 3,
            username: 'q',
            fullname: 'q',
            roleId: 1,
            email: 'qq1be@email.com',
          },
        },
        documents: {
          PublicDocuments: [],
          MyDocuments: [],
          AuthToViewDocuments: [],
          allDocuments: [{
            id: 1,
            title: 'pariatur esse molestiae',
            body: 'Sit autem doloremque laboriosam qui commodi provident reprehenderit.',
            access: 'private',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 5,
            title: 'test document 4',
            body: 'Sunt voluptatum nihil aut unde eum omnis. Maiores debitis corrupti et quos. Sit voluptas delectus at aut facere. Itaque atque et delectus at at voluptas at. Delectus amet placeat perspiciatis qui id corrupti. Qui voluptas assumenda est reiciendis magnam tempora.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 6,
            title: 'test document 5',
            body: 'In nesciunt cupiditate doloremque rem est quo et voluptatem reiciendis. Nesciunt doloribus et suscipit ea voluptate. Id ut praesentium reprehenderit aut velit eaque et harum laudantium. Quos ut veniam ut earum voluptatem sit et. Autem tempore molestias ratione odit non nihil dignissimos aspernatur consequatur. Vel iste voluptas nobis rerum veritatis aliquam voluptatum quaerat.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 7,
            title: 'test document 6',
            body: 'Dolores maiores ullam hic placeat. Delectus sed esse voluptas ducimus itaque enim. Rerum voluptas necessitatibus dolor cumque dolores.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 8,
            title: 'test document 7',
            body: 'Odio id itaque molestias ut eligendi. Fuga odio soluta velit neque aliquam. Aut odio nam est soluta quam.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 9,
            title: 'test document 8',
            body: 'Aut provident consequatur quia cum natus eos id sed eum. Omnis suscipit velit aspernatur. Vitae aspernatur reiciendis assumenda aut sunt.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 10,
            title: 'test document 9',
            body: 'Optio voluptate iure eum sit laborum voluptas. Qui tempora impedit mollitia ut nesciunt placeat sunt repudiandae. Tenetur rerum aspernatur praesentium officia cumque architecto est id. Et quidem similique eum eos voluptas. Aut necessitatibus voluptatem debitis qui neque. Dolor nostrum voluptatem vero quia cum dolores.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 11,
            title: 'test document 10',
            body: 'Quaerat amet vel explicabo voluptatibus sapiente sunt quibusdam mollitia in. Adipisci et est quis laborum et omnis hic blanditiis est. Aut ut est vel ut eos neque. Dolore est delectus sed blanditiis veniam dolorem ducimus.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 12,
            title: 'test document 11',
            body: 'Ratione voluptatum explicabo. Nihil illum eum qui atque reprehenderit. Quae delectus est et quam voluptatem voluptatum quia.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 13,
            title: 'test document 12',
            body: 'Earum necessitatibus consequatur error et fugiat aut rem. Illo facilis praesentium voluptas saepe adipisci. Qui aut ea quis amet consectetur velit consequatur impedit dolorem. Corrupti repellendus quae voluptate animi voluptas saepe dolores eius quisquam.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 14,
            title: 'test document 13',
            body: 'Nesciunt aperiam officiis quo facere atque optio in qui. Corporis quia aliquid iure eum deserunt rerum nulla consequatur. Dolorem placeat nisi sit consequatur velit placeat autem at.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 15,
            title: 'test document 14',
            body: 'Et laborum rerum et sunt. Et voluptatem consectetur est reiciendis repellendus voluptate. Nesciunt nobis voluptatem quaerat ducimus libero voluptate quasi. Assumenda quisquam nisi. Et pariatur sunt et explicabo tenetur quos enim numquam consequatur.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 16,
            title: 'test document 15',
            body: 'Qui est nihil eveniet. Sit porro unde et quisquam temporibus. Repellendus rerum officia voluptas. Possimus adipisci ut reprehenderit ex soluta ut deserunt autem consequatur.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 17,
            title: 'test document 16',
            body: 'Laboriosam eum aut. Blanditiis quia eaque est autem deserunt omnis optio minus commodi. Non aut soluta commodi delectus soluta at autem libero. Consequatur asperiores aut accusantium aut et voluptas. Doloremque accusamus qui voluptatem suscipit fuga aperiam soluta. Non in perspiciatis sunt rerum voluptatem consequatur saepe.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 18,
            title: 'test document 17',
            body: 'Rerum nemo non veritatis minus nesciunt facilis sint et. Error illum aut saepe perspiciatis deserunt repudiandae officia amet veniam. Velit sint assumenda omnis ut atque error sint quo. Suscipit corrupti minima. Ad magnam necessitatibus repudiandae reiciendis vel temporibus. Aut reiciendis dicta a voluptas aut nam sint hic modi.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 19,
            title: 'test document 18',
            body: 'Iure non repudiandae vitae dolorem aut. Dolorum ratione animi. Blanditiis laboriosam dolores minima ipsam. Quae ut sequi. Ut ullam nihil nostrum. Praesentium praesentium vero non tempora minima.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:34:31.237Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }, {
            id: 2,
            title: 'Fake title documentddddd',
            body: 'Corporis non omnis quisquam eum qui sed quidem incidunt itaque. Nihil ad aperiam qui qui consequuntur qui sit. Enim tempore doloribus consequatur hic sint ullam et veritatis corrupti.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-20T14:34:31.237Z',
            updatedAt: '2017-05-20T14:39:09.220Z',
            userId: 1,
            User: {
              fullname: 'jonathan doe',
            },
          }],
        },
        user: [],
        role: [],
      });
  });

  it('should handle LOAD_ALL_USERS_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 3,
          username: 'q',
          fullname: 'q',
          roleId: 1,
          email: 'qq1be@email.com',
        },
        allUsers: [{
          id: 1,
          fullname: 'jonathan doe',
          username: 'john doe',
          email: 'Lauren52@hotmail.com',
          roleId: 3,
          password: '$2a$08$wR9H1v9aTlotDRbghNFvvO2Q4C7Kgp9ALlhUf/1XcOci41iFIBVLG',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:34:31.097Z',
        }, {
          id: 2,
          fullname: 'Bill Rosenbaum',
          username: 'Baron.Schamberger',
          email: 'Alexanne_OKon25@hotmail.com',
          roleId: 3,
          password: '$2a$08$37RnX6KymnY4WPE2nNcaIukhQv3KGLYmqLuKOir08s6fysWb36FBS',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:34:31.097Z',
        }, {
          id: 3,
          fullname: 'q',
          username: 'q',
          email: 'qq1be@email.com',
          roleId: 1,
          password: '$2a$08$/wc8Z.1yhODSKT9JN7t2EeFQ9pjwnnsVzYBirGcuscL9Z0rsMqIXW',
          createdAt: '2017-05-20T14:35:51.928Z',
          updatedAt: '2017-05-20T14:35:51.928Z',
        }, {
          id: 20,
          fullname: 'Brenna Konopelskia',
          username: 'Furman67',
          email: 'Litzy_Kutch24@hotmail.com',
          roleId: 1,
          password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.',
          createdAt: '2017-05-20T14:34:31.085Z',
          updatedAt: '2017-05-20T14:36:39.503Z',
        }],
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
        id: 1,
        fullname: 'jonathan doe',
        username: 'john doe',
        email: 'Lauren52@hotmail.com',
        roleId: 3,
        password: '$2a$08$wR9H1v9aTlotDRbghNFvvO2Q4C7Kgp9ALlhUf/1XcOci41iFIBVLG',
        createdAt: '2017-05-20T14:34:31.085Z',
        updatedAt: '2017-05-20T14:34:31.097Z',
      }, {
        id: 2,
        fullname: 'Bill Rosenbaum',
        username: 'Baron.Schamberger',
        email: 'Alexanne_OKon25@hotmail.com',
        roleId: 3,
        password: '$2a$08$37RnX6KymnY4WPE2nNcaIukhQv3KGLYmqLuKOir08s6fysWb36FBS',
        createdAt: '2017-05-20T14:34:31.085Z',
        updatedAt: '2017-05-20T14:34:31.097Z',
      }, {
        id: 3,
        fullname: 'q',
        username: 'q',
        email: 'qq1be@email.com',
        roleId: 1,
        password: '$2a$08$/wc8Z.1yhODSKT9JN7t2EeFQ9pjwnnsVzYBirGcuscL9Z0rsMqIXW',
        createdAt: '2017-05-20T14:35:51.928Z',
        updatedAt: '2017-05-20T14:35:51.928Z',
      }, {
        id: 20,
        fullname: 'Brenna Konopelskia',
        username: 'Furman67',
        email: 'Litzy_Kutch24@hotmail.com',
        roleId: 1,
        password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.',
        createdAt: '2017-05-20T14:34:31.085Z',
        updatedAt: '2017-05-20T14:36:39.503Z',
      }],
    });
    expect(state)
      .toEqual({
        flashMessages: [],
        login: {
          isAuthenticated: true,
          user: {
            id: 3,
            username: 'q',
            fullname: 'q',
            roleId: 1,
            email: 'qq1be@email.com',
          },
          allUsers: [{
            id: 1,
            fullname: 'jonathan doe',
            username: 'john doe',
            email: 'Lauren52@hotmail.com',
            roleId: 3,
            password: '$2a$08$wR9H1v9aTlotDRbghNFvvO2Q4C7Kgp9ALlhUf/1XcOci41iFIBVLG',
            createdAt: '2017-05-20T14:34:31.085Z',
            updatedAt: '2017-05-20T14:34:31.097Z',
          }, {
            id: 2,
            fullname: 'Bill Rosenbaum',
            username: 'Baron.Schamberger',
            email: 'Alexanne_OKon25@hotmail.com',
            roleId: 3,
            password: '$2a$08$37RnX6KymnY4WPE2nNcaIukhQv3KGLYmqLuKOir08s6fysWb36FBS',
            createdAt: '2017-05-20T14:34:31.085Z',
            updatedAt: '2017-05-20T14:34:31.097Z',
          }, {
            id: 3,
            fullname: 'q',
            username: 'q',
            email: 'qq1be@email.com',
            roleId: 1,
            password: '$2a$08$/wc8Z.1yhODSKT9JN7t2EeFQ9pjwnnsVzYBirGcuscL9Z0rsMqIXW',
            createdAt: '2017-05-20T14:35:51.928Z',
            updatedAt: '2017-05-20T14:35:51.928Z',
          }, {
            id: 20,
            fullname: 'Brenna Konopelskia',
            username: 'Furman67',
            email: 'Litzy_Kutch24@hotmail.com',
            roleId: 1,
            password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.',
            createdAt: '2017-05-20T14:34:31.085Z',
            updatedAt: '2017-05-20T14:36:39.503Z',
          }],
        },
        documents: {
          PublicDocuments: [],
          MyDocuments: [],
          AuthToViewDocuments: [],
          allDocuments: [],
        },
        user: [],
        role: [],
      });
  });

   it('should handle UPDATE_SINGLE_USER_BY_ADMIN_SUCCESSactions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 3,
          username: 'q',
          fullname: 'q',
          roleId: 1,
          email: 'qq1be@email.com'
        },
        allUsers: [{
          id: 21,
          fullname: 'Leonora Effertz',
          username: 'Morris53',
          email: 'Shaniya7@hotmail.com',
          roleId: 2,
          password: '$2a$08$JmtETt9VP2aVfT8r..qd5uFyw79U3KLhzE/FW6S3lYkjwq7DjPIEG',
          createdAt: '2017-05-20T17:36:54.518Z',
          updatedAt: '2017-05-20T17:36:54.528Z'
        }, {
          id: 1,
          fullname: 'Meaghan Mann',
          username: 'Brandon_Bergstrom21',
          email: 'Verna.Wolff@hotmail.com',
          roleId: 3,
          password: '$2a$08$QmAIB2Nm/1iZZEmI3hEbye31ptAP4ktLMWurdskdTIXqo3QizXUWi',
          createdAt: '2017-05-20T17:36:54.518Z',
          updatedAt: '2017-05-20T17:36:54.529Z'
        }, {
          id: 2,
          fullname: 'jonathan doe',
          username: 'john doe',
          email: 'Watson74@hotmail.com',
          roleId: 3,
          password: '$2a$08$n0drriErlmSby9BMRNdiCu/F9OnV7l49poVJ0ELvTYN0aU62pKKGa',
          createdAt: '2017-05-20T17:36:54.518Z',
          updatedAt: '2017-05-20T17:36:54.529Z'
        }, {
          id: 20,
          fullname: 'Katrina',
          username: 'Amy.DuBuque',
          email: 'Eugenia.Nienow24@gmail.com',
          roleId: 1,
          password: '$2a$08$6srGdPMfYjKifUor2WfP2eFnto4EBxjuan6YMKXuti5IJTr0uB12y',
          createdAt: '2017-05-20T17:36:54.518Z',
          updatedAt: '2017-05-20T17:41:47.660Z'
        }, {
          id: 3,
          fullname: 'q',
          username: 'ggq',
          email: 'qq1be@email.com',
          roleId: 1,
          password: '$2a$08$MpLOYfieiI64tF/AT6IoHOUZvfZfEmLU2zXC5BmEFWNDywTDkLVUy',
          createdAt: '2017-05-20T17:41:12.520Z',
          updatedAt: '2017-05-20T17:45:29.614Z'
        }]
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: [],
        AuthToViewDocuments: [],
        allDocuments: []
      },
      user: [],
      role: []
    }, {
      type: 'UPDATE_SINGLE_USER_BY_ADMIN_SUCCESS',
      userId: 21,
      updatedUser: {
        fullname: 'Leonora Effertz',
        username: 'Morris53j',
        email: 'Shaniya7@hotmail.com',
        roleId: 2
      }
    });
    expect(state)
      .toEqual({
        flashMessages: [],
        login: {
          isAuthenticated: true,
          user: {
            id: 3,
            username: 'q',
            fullname: 'q',
            roleId: 1,
            email: 'qq1be@email.com'
          },
          allUsers: [{
            id: 1,
            fullname: 'Meaghan Mann',
            username: 'Brandon_Bergstrom21',
            email: 'Verna.Wolff@hotmail.com',
            roleId: 3,
            password: '$2a$08$QmAIB2Nm/1iZZEmI3hEbye31ptAP4ktLMWurdskdTIXqo3QizXUWi',
            createdAt: '2017-05-20T17:36:54.518Z',
            updatedAt: '2017-05-20T17:36:54.529Z'
          }, {
            id: 2,
            fullname: 'jonathan doe',
            username: 'john doe',
            email: 'Watson74@hotmail.com',
            roleId: 3,
            password: '$2a$08$n0drriErlmSby9BMRNdiCu/F9OnV7l49poVJ0ELvTYN0aU62pKKGa',
            createdAt: '2017-05-20T17:36:54.518Z',
            updatedAt: '2017-05-20T17:36:54.529Z'
          }, {
            id: 20,
            fullname: 'Katrina',
            username: 'Amy.DuBuque',
            email: 'Eugenia.Nienow24@gmail.com',
            roleId: 1,
            password: '$2a$08$6srGdPMfYjKifUor2WfP2eFnto4EBxjuan6YMKXuti5IJTr0uB12y',
            createdAt: '2017-05-20T17:36:54.518Z',
            updatedAt: '2017-05-20T17:41:47.660Z'
          }, {
            id: 3,
            fullname: 'q',
            username: 'ggq',
            email: 'qq1be@email.com',
            roleId: 1,
            password: '$2a$08$MpLOYfieiI64tF/AT6IoHOUZvfZfEmLU2zXC5BmEFWNDywTDkLVUy',
            createdAt: '2017-05-20T17:41:12.520Z',
            updatedAt: '2017-05-20T17:45:29.614Z'
          }, {
            fullname: 'Leonora Effertz',
            username: 'Morris53j',
            email: 'Shaniya7@hotmail.com',
            roleId: 2
          }]
        },
        documents: {
          PublicDocuments: [],
          MyDocuments: [],
          AuthToViewDocuments: [],
          allDocuments: []
        },
        user: [],
        role: []
      });
  });
});
