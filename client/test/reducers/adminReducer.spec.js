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
    let state;
    state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 12,
          username: 'qq',
          fullname: 'qq',
          roleId: 1,
          email: 'qq1e@email.com'
        }
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
              fullname: 'qq'
            }
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
              fullname: 'qq'
            }
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
              fullname: 'qq'
            }
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
              fullname: 'qq'
            }
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
              fullname: 'qq'
            }
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
              fullname: 'qq'
            }
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
              fullname: 'qq'
            }
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
              fullname: 'qq'
            }
          }]
        }
      },
      user: [],
      role: []
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
          fullname: 'qq'
        }
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
          fullname: 'qq'
        }
      }],
      metadata: {
        page: 2,
        pageCount: 2,
        pageSize: 2,
        totalCount: 10
      },
      count: 10
    });
    expect(state)
      .toEqual({
        flashMessages: [],
        login: {
          isAuthenticated: true,
          user: {
            id: 12,
            username: 'qq',
            fullname: 'qq',
            roleId: 1,
            email: 'qq1e@email.com'
          }
        },
        documents: {
          PublicDocuments: [],
          MyDocuments: [],
          AuthToViewDocuments: [],
          allDocuments: {
            count: 10,
            page: 2,
            pageCount: 2,
            pageSize: 2,
            totalCount: 10,
            documents: [{
              id: 8,
              title: 'test document 7r',
              body: 'Voluptatibus et quos ut culpa mollitia amet voluptas ratione id. Error nesciunt eos libero ratione. Aliquam dolore qui similique nemo qui dolorem et. Omnis praesentium ducimus maiores cum.',
              access: 'public',
              ownerRoleId: 2,
              createdAt: '2017-05-26T16:41:07.867Z',
              updatedAt: '2017-06-01T15:29:34.760Z',
              userId: 12,
              User: {
                fullname: 'qq'
              }
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
                fullname: 'qq'
              }
            }]
          }
        },
        user: [],
        role: []
      });
  });

  it('should handle LOAD_ALL_USERS_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 12,
          username: 'qq',
          fullname: 'qq',
          roleId: 1,
          email: 'qq1e@email.com'
        },
        allUsers: {
          count: 11,
          page: 1,
          pageCount: 2,
          pageSize: '8',
          totalCount: 11,
          users: [{
            id: 7,
            fullname: 'Omadoye Jedidiah',
            username: 'SlimJed11',
            email: 'jedd1@email.com',
            roleId: 1,
            password: '$2a$08$2XUYM2X9ESdwdSip6mgbC.aNUflqXfA/tywRfNNQZcxd5UKJIO8Dm',
            createdAt: '2017-05-30T14:02:10.970Z',
            updatedAt: '2017-05-30T14:02:10.970Z'
          }, {
            id: 1,
            fullname: 'Omadoye Jedidiah',
            username: 'Conor_Kertzmann',
            email: 'Elisha39@yahoo.com',
            roleId: 1,
            password: '$2a$08$miFus48yBc/Gr8XBR5EKfOMPDW41OhkrBFIRJ8ASaiD1d/PuYB37W',
            createdAt: '2017-05-26T16:41:07.724Z',
            updatedAt: '2017-05-30T14:29:21.713Z'
          }, {
            id: 3,
            fullname: 'Omadoye Jedidiah',
            username: 'dede',
            email: 'Lyric86@yahoo.com',
            roleId: 1,
            password: '$2a$08$LOovNmHFZdlDOgASnlQ94.cAZkPwJT333yr5zKTRyki7i5bqixyMi',
            createdAt: '2017-05-26T16:41:07.724Z',
            updatedAt: '2017-05-30T14:29:32.320Z'
          }, {
            id: 11,
            fullname: 'jed anthony',
            username: 'jerry1234',
            email: 'jerry1234@andela.com',
            roleId: 1,
            password: '$2a$08$I8SQy8zrk9U/aUUxU0B6q.mDiuE/a0.tvObZql8jmcd.2yCSicqfG',
            createdAt: '2017-05-31T22:31:38.246Z',
            updatedAt: '2017-05-31T22:31:38.246Z'
          }, {
            id: 12,
            fullname: 'qq',
            username: 'qq',
            email: 'qq1e@email.com',
            roleId: 1,
            password: '$2a$08$d.8i89FQWCGGTw63MW..kOi3muS9.JMna3yZktvFcefVO6M2BP0Fu',
            createdAt: '2017-06-01T09:03:43.598Z',
            updatedAt: '2017-06-01T09:03:43.598Z'
          }, {
            id: 20,
            fullname: 'NightWatch User',
            username: 'NightWatchUser',
            email: 'NightWatchUser@night.com',
            roleId: 3,
            password: '$2a$08$MDFCNzn11lHylvB8GWH.Iu/hBavuAdW.Dn1NCev4Iv0gRyzGDNakG',
            createdAt: '2017-05-26T16:41:07.724Z',
            updatedAt: '2017-06-01T15:30:52.802Z'
          }, {
            id: 4,
            fullname: 'Omadoye Jedidiah',
            username: 'SlimJed1',
            email: 'jedd@email.com',
            roleId: 1,
            password: '$2a$08$X8C9rGH.rMG8h.AgjeAxA.iCBXdobh8FW4j11mpVkBlkY1wJZdiGS',
            createdAt: '2017-05-27T11:28:54.221Z',
            updatedAt: '2017-06-01T15:32:03.878Z'
          }, {
            id: 13,
            fullname: 'Omadoye Jedidiah',
            username: 'SlimJed11q',
            email: 'jedd1s@email.com',
            roleId: 1,
            password: '$2a$08$ratO0oBTuiJASK99x.QFce7p87QNethstSQqg/1cgZBSYJE60brpC',
            createdAt: '2017-06-01T15:37:55.481Z',
            updatedAt: '2017-06-01T15:37:55.481Z'
          }]
        }
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
      type: 'LOAD_ALL_USERS_SUCCESS',
      users: [{
        id: 111,
        fullname: 'q',
        username: 'q',
        email: 'qq',
        roleId: 1,
        password: 'qq',
        createdAt: '2017-06-01T15:37:55.481Z',
        updatedAt: '2017-06-01T15:37:55.481Z'
      }, {
        id: 14,
        fullname: 'Omadoye Jedidiah',
        username: 'SlimJed11qq',
        email: 'jedds1s@email.com',
        roleId: 1,
        password: '$2a$08$3heGS.LClgDFrW5Vim335eixRl9e6rCfYvqLTPtQRVAJmaFbJfCk6',
        createdAt: '2017-06-02T16:32:27.681Z',
        updatedAt: '2017-06-02T16:32:27.681Z'
      }, {
        id: 15,
        fullname: 'Omadoye Jedidiah',
        username: 'SlimJed11dqq',
        email: 'jedddds1s@email.com',
        roleId: 1,
        password: '$2a$08$zSEtWaEG8adnQLkZ0kIRbeFxnjCHr4ADljSwc2BUwp4EZjJ4KfRBW',
        createdAt: '2017-06-03T19:05:08.008Z',
        updatedAt: '2017-06-03T19:05:08.008Z'
      }],
      metadata: {
        page: 2,
        pageCount: 2,
        pageSize: 3,
        totalCount: 11
      },
      count: 11
    });
    expect(state)
      .toEqual({
        flashMessages: [],
        login: {
          isAuthenticated: true,
          user: {
            id: 12,
            username: 'qq',
            fullname: 'qq',
            roleId: 1,
            email: 'qq1e@email.com'
          },
          allUsers: {
            count: 11,
            page: 2,
            pageCount: 2,
            pageSize: 3,
            totalCount: 11,
            users: [{
              id: 111,
              fullname: 'q',
              username: 'q',
              email: 'qq',
              roleId: 1,
              password: 'qq',
              createdAt: '2017-06-01T15:37:55.481Z',
              updatedAt: '2017-06-01T15:37:55.481Z'
            }, {
              id: 14,
              fullname: 'Omadoye Jedidiah',
              username: 'SlimJed11qq',
              email: 'jedds1s@email.com',
              roleId: 1,
              password: '$2a$08$3heGS.LClgDFrW5Vim335eixRl9e6rCfYvqLTPtQRVAJmaFbJfCk6',
              createdAt: '2017-06-02T16:32:27.681Z',
              updatedAt: '2017-06-02T16:32:27.681Z'
            }, {
              id: 15,
              fullname: 'Omadoye Jedidiah',
              username: 'SlimJed11dqq',
              email: 'jedddds1s@email.com',
              roleId: 1,
              password: '$2a$08$zSEtWaEG8adnQLkZ0kIRbeFxnjCHr4ADljSwc2BUwp4EZjJ4KfRBW',
              createdAt: '2017-06-03T19:05:08.008Z',
              updatedAt: '2017-06-03T19:05:08.008Z'
            }]
          }
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
