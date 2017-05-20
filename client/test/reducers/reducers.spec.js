import expect from 'expect';
import reducers from '../../reducers/';

describe('Reducers', () => {
  it('should handle SET_CURRENT_USER actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: false,
        user: {},
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
      type: 'SET_CURRENT_USER',
      user: {
        data: {
          id: 7,
          username: 'jerry',
          fullname: 'jerry',
          roleId: 3,
          email: 'jerry@ff.com',
        },
        iat: 1495288909,
        exp: 1495375309,
      },
    });
    expect(state)
      .toEqual({
        flashMessages: [],
        login: {
          isAuthenticated: true,
          user: {
            id: 7,
            username: 'jerry',
            fullname: 'jerry',
            roleId: 3,
            email: 'jerry@ff.com',
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
      });
  });

  it('should handle LOAD_USER_PROFILE_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 7,
          username: 'jerry',
          fullname: 'jerry',
          roleId: 3,
          email: 'jerry@ff.com',
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
      type: 'LOAD_USER_PROFILE_SUCCESS',
      userDetails: {
        id: 7,
        fullname: 'jerry',
        username: 'jerry',
        email: 'jerry@ff.com',
        roleId: 3,
        password: '$2a$08$b.rXG69qFkdd3jGnLVrfUewpAC0zYx4vZifhMTKkwEJxG4n7lVAGO',
        createdAt: '2017-05-20T14:01:40.065Z',
        updatedAt: '2017-05-20T14:01:40.065Z',
        documents: [],
      },
    });
    expect(state)
      .toEqual({
        flashMessages: [],
        login: {
          isAuthenticated: true,
          user: {
            id: 7,
            fullname: 'jerry',
            username: 'jerry',
            email: 'jerry@ff.com',
            roleId: 3,
            password: '$2a$08$b.rXG69qFkdd3jGnLVrfUewpAC0zYx4vZifhMTKkwEJxG4n7lVAGO',
            createdAt: '2017-05-20T14:01:40.065Z',
            updatedAt: '2017-05-20T14:01:40.065Z',
            documents: [],
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
      });
  });

  it('should handle UPDATE_USER_PROFILE_SUCCESSactions', () => {
    const state = reducers({
      flashMessages: [{
        id: 1,
        text: 'User updated successfully.',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 7,
          fullname: 'jerry',
          username: 'jerry',
          email: 'jerry@ff.com',
          roleId: 3,
          password: '$2a$08$b.rXG69qFkdd3jGnLVrfUewpAC0zYx4vZifhMTKkwEJxG4n7lVAGO',
          createdAt: '2017-05-20T14:01:40.065Z',
          updatedAt: '2017-05-20T14:01:40.065Z',
          documents: [],
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
      type: 'UPDATE_USER_PROFILE_SUCCESS',
      updatedUser: {
        success: true,
        message: 'User updated successfully.',
        user: {
          id: 7,
          fullname: 'jerry',
          username: 'jerry',
          email: 'jerry@ff.com',
          roleId: 3,
          password: '$2a$08$mXt6ErO1NQVw4j/lkBsIseLxX7haeonkmgh9svP5XJQXC5oo02Z1a',
          createdAt: '2017-05-20T14:01:40.065Z',
          updatedAt: '2017-05-20T14:01:40.065Z',
          documents: [],
        },
      },
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
            id: 7,
            fullname: 'jerry',
            username: 'jerry',
            email: 'jerry@ff.com',
            roleId: 3,
            password: '$2a$08$mXt6ErO1NQVw4j/lkBsIseLxX7haeonkmgh9svP5XJQXC5oo02Z1a',
            createdAt: '2017-05-20T14:01:40.065Z',
            updatedAt: '2017-05-20T14:01:40.065Z',
            documents: [],
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
      });
  });

  it('should handle LOAD_USER_DOCUMENT_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 7,
          username: 'jerry',
          fullname: 'jerry',
          roleId: 3,
          email: 'jerry@ff.com',
        },
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: [{
          id: 20,
          title: 'WW',
          body: 'WW',
          access: 'public',
          ownerRoleId: 3,
          createdAt: '2017-05-20T14:06:31.512Z',
          updatedAt: '2017-05-20T14:06:31.512Z',
          userId: 7,
          User: {
            id: 7,
            fullname: 'jerry',
            username: 'jerry',
            email: 'jerry@ff.com',
            roleId: 3,
            password: '$2a$08$mXt6ErO1NQVw4j/lkBsIseLxX7haeonkmgh9svP5XJQXC5oo02Z1a',
            createdAt: '2017-05-20T14:01:40.065Z',
            updatedAt: '2017-05-20T14:01:40.065Z',
          },
        }],
        AuthToViewDocuments: [],
        allDocuments: [],
      },
      user: [],
      role: [],
    }, {
      type: 'LOAD_USER_DOCUMENT_SUCCESS',
      MyDocuments: [{
        id: 20,
        title: 'WW',
        body: 'WW',
        access: 'public',
        ownerRoleId: 3,
        createdAt: '2017-05-20T14:06:31.512Z',
        updatedAt: '2017-05-20T14:06:31.512Z',
        userId: 7,
        User: {
          id: 7,
          fullname: 'jerry',
          username: 'jerry',
          email: 'jerry@ff.com',
          roleId: 3,
          password: '$2a$08$mXt6ErO1NQVw4j/lkBsIseLxX7haeonkmgh9svP5XJQXC5oo02Z1a',
          createdAt: '2017-05-20T14:01:40.065Z',
          updatedAt: '2017-05-20T14:01:40.065Z',
        },
      }],
    });
    expect(state)
      .toEqual({
        flashMessages: [],
        login: {
          isAuthenticated: true,
          user: {
            id: 7,
            username: 'jerry',
            fullname: 'jerry',
            roleId: 3,
            email: 'jerry@ff.com',
          },
        },
        documents: {
          PublicDocuments: [],
          MyDocuments: [{
            id: 20,
            title: 'WW',
            body: 'WW',
            access: 'public',
            ownerRoleId: 3,
            createdAt: '2017-05-20T14:06:31.512Z',
            updatedAt: '2017-05-20T14:06:31.512Z',
            userId: 7,
            User: {
              id: 7,
              fullname: 'jerry',
              username: 'jerry',
              email: 'jerry@ff.com',
              roleId: 3,
              password: '$2a$08$mXt6ErO1NQVw4j/lkBsIseLxX7haeonkmgh9svP5XJQXC5oo02Z1a',
              createdAt: '2017-05-20T14:01:40.065Z',
              updatedAt: '2017-05-20T14:01:40.065Z',
            },
          }],
          AuthToViewDocuments: [],
          allDocuments: [],
        },
        user: [],
        role: [],
      });
  });

  it('should handle UPDATE_USER_DOCUMENT_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [{
        id: 1,
        text: 'Document successfuly updated',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 7,
          username: 'jerry',
          fullname: 'jerry',
          roleId: 3,
          email: 'jerry@ff.com',
        },
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: [{
          id: 20,
          title: 'WW',
          body: 'WW',
          access: 'public',
          ownerRoleId: 3,
          createdAt: '2017-05-20T14:06:31.512Z',
          updatedAt: '2017-05-20T14:06:31.512Z',
          userId: 7,
          User: {
            id: 7,
            fullname: 'jerry',
            username: 'jerry',
            email: 'jerry@ff.com',
            roleId: 3,
            password: '$2a$08$mXt6ErO1NQVw4j/lkBsIseLxX7haeonkmgh9svP5XJQXC5oo02Z1a',
            createdAt: '2017-05-20T14:01:40.065Z',
            updatedAt: '2017-05-20T14:01:40.065Z',
          },
        }],
        AuthToViewDocuments: [],
        allDocuments: [],
      },
      user: [],
      role: [],
    }, {
      type: 'UPDATE_USER_DOCUMENT_SUCCESS',
      document: {
        id: 20,
        title: 'WWE',
        body: 'WWE',
        access: 'public',
        ownerRoleId: 3,
        createdAt: '2017-05-20T14:06:31.512Z',
        updatedAt: '2017-05-20T14:07:30.054Z',
        userId: 7,
      },
      documentId: 20,
    });
    expect(state)
      .toEqual({
        flashMessages: [{
          id: 1,
          text: 'Document successfuly updated',
        }],
        login: {
          isAuthenticated: true,
          user: {
            id: 7,
            username: 'jerry',
            fullname: 'jerry',
            roleId: 3,
            email: 'jerry@ff.com',
          },
        },
        documents: {
          MyDocuments: [{
            id: 20,
            title: 'WWE',
            body: 'WWE',
            access: 'public',
            ownerRoleId: 3,
            createdAt: '2017-05-20T14:06:31.512Z',
            updatedAt: '2017-05-20T14:07:30.054Z',
            userId: 7,
          }],
        },
        user: [],
        role: [],
      });
  });

  it('should handle DELETE_USER_DOCUMENT_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [{
        id: 1,
        text: 'Document deleted successfully.',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 7,
          username: 'jerry',
          fullname: 'jerry',
          roleId: 3,
          email: 'jerry@ff.com',
        },
      },
      documents: {
        MyDocuments: [],
      },
      user: [],
      role: [],
    }, {
      type: 'DELETE_USER_DOCUMENT_SUCCESS',
      documentId: 20,
    });
    expect(state)
      .toEqual({
        flashMessages: [{
          id: 1,
          text: 'Document deleted successfully.',
        }],
        login: {
          isAuthenticated: true,
          user: {
            id: 7,
            username: 'jerry',
            fullname: 'jerry',
            roleId: 3,
            email: 'jerry@ff.com',
          },
        },
        documents: {
          MyDocuments: [],
        },
        user: [],
        role: [],
      });
  });

  it('should handle LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: false,
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
      type: 'LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS',
      PublicDocuments: [{
        id: 2,
        title: 'Fake title document',
        body: 'Quidem qui cum voluptas natus est adipisci placeat aliquid aut. Qui reiciendis voluptatibus officia dolores consequatur est. Accusamus et repellat dolores officiis aut fuga voluptas.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 3,
        title: 'test document 2',
        body: 'Mollitia ea accusantium debitis adipisci odio nam neque. Earum nam atque non ab doloribus. Iusto ratione aut officiis et omnis rerum aut odit.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 4,
        title: 'test document 3',
        body: 'Ut ipsa alias est vero voluptatem voluptatem adipisci eos. Quia velit alias ea dolore. Sed rerum aut dolore veniam ipsa hic quo laboriosam. Aut hic sed. Est esse et minima alias voluptatem in porro pariatur accusamus. Mollitia illum molestias libero rerum quisquam.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 5,
        title: 'test document 4',
        body: 'Ducimus quasi unde. Rerum laudantium ducimus alias. Optio recusandae consequatur laboriosam nesciunt ut. Nihil mollitia eum et rerum et qui quia sint. Delectus delectus officiis exercitationem dolor corporis doloremque deserunt ea eos.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 6,
        title: 'test document 5',
        body: 'Repellendus amet sapiente nam neque. In fuga est velit possimus dicta. Nihil pariatur sunt repellat minus. Blanditiis suscipit qui enim illum placeat voluptatem.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 7,
        title: 'test document 6',
        body: 'Nihil numquam omnis. Ut excepturi assumenda dolorem maxime. Illum ut ullam voluptatum consequatur eligendi non eos dolore. Omnis sequi distinctio molestias. Nihil molestias pariatur. Ut voluptatibus est fugit molestiae.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 8,
        title: 'test document 7',
        body: 'Reprehenderit nulla ut iusto vitae assumenda et aut nesciunt hic. Adipisci est nostrum autem aliquid dignissimos. Minus suscipit similique. Quidem est quod expedita.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 9,
        title: 'test document 8',
        body: 'Exercitationem eum sed quos animi. Nam vel tempora id ullam repellendus illum qui perspiciatis nemo. Alias et laudantium natus aliquam. Dolores voluptatum ut. Quia non ut mollitia voluptas et.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 10,
        title: 'test document 9',
        body: 'Voluptatem voluptatem quod exercitationem quo ut earum nisi. Magnam quas dolores sit vel animi vitae. Molestiae sint accusamus quibusdam odio necessitatibus. Quos quis qui.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 11,
        title: 'test document 10',
        body: 'Veniam doloribus vel. Non vel quidem velit et soluta. Sequi et rerum ut numquam labore maiores excepturi corporis provident. Voluptas molestias veniam nam natus eligendi voluptate provident sequi. Inventore qui suscipit ut eos placeat autem repudiandae exercitationem aut.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 12,
        title: 'test document 11',
        body: 'Omnis explicabo voluptas exercitationem qui voluptate ipsam voluptatum. Minus esse impedit dolor ut itaque nihil accusamus praesentium officia. Vel quia voluptates aut iure facilis consequatur veniam et veritatis. Reprehenderit quia veritatis quis eos itaque. Et itaque quo voluptas qui dolorum voluptatem ipsa. Quidem voluptas saepe nesciunt optio.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 13,
        title: 'test document 12',
        body: 'Impedit quisquam non. Tempora distinctio corporis. Et aperiam praesentium dolor alias eum.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 14,
        title: 'test document 13',
        body: 'Ratione enim fugiat iure veniam dolorem sed vero unde. Dolorem quia iusto quidem. Ut voluptates non molestiae quos facere rerum animi et quos. Quisquam et quia velit sit quis magni. Autem similique natus et blanditiis vel dolorem. Perspiciatis repudiandae incidunt temporibus maxime aut ut enim.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 15,
        title: 'test document 14',
        body: 'Non perspiciatis doloribus voluptate odio consequuntur sed sed aperiam explicabo. Et porro est odio omnis. Reiciendis repellendus ut corrupti accusantium. Et omnis nam inventore nostrum alias non aliquid quis. Sequi vel est modi omnis laborum.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 16,
        title: 'test document 15',
        body: 'Modi sed dicta. Voluptas facere veritatis corporis qui est voluptatibus voluptatem reprehenderit. Enim corrupti qui quibusdam cupiditate illum odit quibusdam. Nihil non ad omnis ut laborum sunt est.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 17,
        title: 'test document 16',
        body: 'Cum sequi ad iusto voluptatem ex omnis incidunt iusto. Quia beatae porro sit. Vel eos voluptatem repudiandae. Exercitationem debitis veritatis id.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 18,
        title: 'test document 17',
        body: 'Aut quo enim deleniti ipsam. Harum dolorum et culpa minus numquam est quas. Enim labore qui quo et. Aspernatur qui sequi rem vero recusandae ullam omnis. Sunt cupiditate velit aperiam quia tempore sit aperiam praesentium.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 19,
        title: 'test document 18',
        body: 'Exercitationem et fuga rerum laborum qui ipsa fuga. Et voluptas tempore quod laudantium repellat nesciunt ut. Ex ut in sit et nihil architecto ad. Recusandae ut rerum autem rerum odit dolore doloribus.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }],
    });
    expect(state)
      .toEqual({
        flashMessages: [],
        login: {
          isAuthenticated: false,
        },
        documents: {
          PublicDocuments: [{
            id: 2,
            title: 'Fake title document',
            body: 'Quidem qui cum voluptas natus est adipisci placeat aliquid aut. Qui reiciendis voluptatibus officia dolores consequatur est. Accusamus et repellat dolores officiis aut fuga voluptas.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 3,
            title: 'test document 2',
            body: 'Mollitia ea accusantium debitis adipisci odio nam neque. Earum nam atque non ab doloribus. Iusto ratione aut officiis et omnis rerum aut odit.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 4,
            title: 'test document 3',
            body: 'Ut ipsa alias est vero voluptatem voluptatem adipisci eos. Quia velit alias ea dolore. Sed rerum aut dolore veniam ipsa hic quo laboriosam. Aut hic sed. Est esse et minima alias voluptatem in porro pariatur accusamus. Mollitia illum molestias libero rerum quisquam.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 5,
            title: 'test document 4',
            body: 'Ducimus quasi unde. Rerum laudantium ducimus alias. Optio recusandae consequatur laboriosam nesciunt ut. Nihil mollitia eum et rerum et qui quia sint. Delectus delectus officiis exercitationem dolor corporis doloremque deserunt ea eos.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 6,
            title: 'test document 5',
            body: 'Repellendus amet sapiente nam neque. In fuga est velit possimus dicta. Nihil pariatur sunt repellat minus. Blanditiis suscipit qui enim illum placeat voluptatem.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 7,
            title: 'test document 6',
            body: 'Nihil numquam omnis. Ut excepturi assumenda dolorem maxime. Illum ut ullam voluptatum consequatur eligendi non eos dolore. Omnis sequi distinctio molestias. Nihil molestias pariatur. Ut voluptatibus est fugit molestiae.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 8,
            title: 'test document 7',
            body: 'Reprehenderit nulla ut iusto vitae assumenda et aut nesciunt hic. Adipisci est nostrum autem aliquid dignissimos. Minus suscipit similique. Quidem est quod expedita.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 9,
            title: 'test document 8',
            body: 'Exercitationem eum sed quos animi. Nam vel tempora id ullam repellendus illum qui perspiciatis nemo. Alias et laudantium natus aliquam. Dolores voluptatum ut. Quia non ut mollitia voluptas et.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 10,
            title: 'test document 9',
            body: 'Voluptatem voluptatem quod exercitationem quo ut earum nisi. Magnam quas dolores sit vel animi vitae. Molestiae sint accusamus quibusdam odio necessitatibus. Quos quis qui.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 11,
            title: 'test document 10',
            body: 'Veniam doloribus vel. Non vel quidem velit et soluta. Sequi et rerum ut numquam labore maiores excepturi corporis provident. Voluptas molestias veniam nam natus eligendi voluptate provident sequi. Inventore qui suscipit ut eos placeat autem repudiandae exercitationem aut.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 12,
            title: 'test document 11',
            body: 'Omnis explicabo voluptas exercitationem qui voluptate ipsam voluptatum. Minus esse impedit dolor ut itaque nihil accusamus praesentium officia. Vel quia voluptates aut iure facilis consequatur veniam et veritatis. Reprehenderit quia veritatis quis eos itaque. Et itaque quo voluptas qui dolorum voluptatem ipsa. Quidem voluptas saepe nesciunt optio.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 13,
            title: 'test document 12',
            body: 'Impedit quisquam non. Tempora distinctio corporis. Et aperiam praesentium dolor alias eum.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 14,
            title: 'test document 13',
            body: 'Ratione enim fugiat iure veniam dolorem sed vero unde. Dolorem quia iusto quidem. Ut voluptates non molestiae quos facere rerum animi et quos. Quisquam et quia velit sit quis magni. Autem similique natus et blanditiis vel dolorem. Perspiciatis repudiandae incidunt temporibus maxime aut ut enim.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 15,
            title: 'test document 14',
            body: 'Non perspiciatis doloribus voluptate odio consequuntur sed sed aperiam explicabo. Et porro est odio omnis. Reiciendis repellendus ut corrupti accusantium. Et omnis nam inventore nostrum alias non aliquid quis. Sequi vel est modi omnis laborum.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 16,
            title: 'test document 15',
            body: 'Modi sed dicta. Voluptas facere veritatis corporis qui est voluptatibus voluptatem reprehenderit. Enim corrupti qui quibusdam cupiditate illum odit quibusdam. Nihil non ad omnis ut laborum sunt est.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 17,
            title: 'test document 16',
            body: 'Cum sequi ad iusto voluptatem ex omnis incidunt iusto. Quia beatae porro sit. Vel eos voluptatem repudiandae. Exercitationem debitis veritatis id.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 18,
            title: 'test document 17',
            body: 'Aut quo enim deleniti ipsam. Harum dolorum et culpa minus numquam est quas. Enim labore qui quo et. Aspernatur qui sequi rem vero recusandae ullam omnis. Sunt cupiditate velit aperiam quia tempore sit aperiam praesentium.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 19,
            title: 'test document 18',
            body: 'Exercitationem et fuga rerum laborum qui ipsa fuga. Et voluptas tempore quod laudantium repellat nesciunt ut. Ex ut in sit et nihil architecto ad. Recusandae ut rerum autem rerum odit dolore doloribus.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }],
          MyDocuments: [],
          AuthToViewDocuments: [],
          allDocuments: [],
        },
        user: [],
        role: [],
      });
  });

  it('should handle LOAD_AUTHORIZED_TO_VIEW_DOCUMENT_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 3,
          username: 'jed',
          fullname: 'jed',
          roleId: 3,
          email: 'jed@email.com',
        },
      },
      documents: {
        PublicDocuments: [{
          id: 2,
          title: 'Fake title document',
          body: 'Quidem qui cum voluptas natus est adipisci placeat aliquid aut. Qui reiciendis voluptatibus officia dolores consequatur est. Accusamus et repellat dolores officiis aut fuga voluptas.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 3,
          title: 'test document 2',
          body: 'Mollitia ea accusantium debitis adipisci odio nam neque. Earum nam atque non ab doloribus. Iusto ratione aut officiis et omnis rerum aut odit.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 4,
          title: 'test document 3',
          body: 'Ut ipsa alias est vero voluptatem voluptatem adipisci eos. Quia velit alias ea dolore. Sed rerum aut dolore veniam ipsa hic quo laboriosam. Aut hic sed. Est esse et minima alias voluptatem in porro pariatur accusamus. Mollitia illum molestias libero rerum quisquam.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 5,
          title: 'test document 4',
          body: 'Ducimus quasi unde. Rerum laudantium ducimus alias. Optio recusandae consequatur laboriosam nesciunt ut. Nihil mollitia eum et rerum et qui quia sint. Delectus delectus officiis exercitationem dolor corporis doloremque deserunt ea eos.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 6,
          title: 'test document 5',
          body: 'Repellendus amet sapiente nam neque. In fuga est velit possimus dicta. Nihil pariatur sunt repellat minus. Blanditiis suscipit qui enim illum placeat voluptatem.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 7,
          title: 'test document 6',
          body: 'Nihil numquam omnis. Ut excepturi assumenda dolorem maxime. Illum ut ullam voluptatum consequatur eligendi non eos dolore. Omnis sequi distinctio molestias. Nihil molestias pariatur. Ut voluptatibus est fugit molestiae.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 8,
          title: 'test document 7',
          body: 'Reprehenderit nulla ut iusto vitae assumenda et aut nesciunt hic. Adipisci est nostrum autem aliquid dignissimos. Minus suscipit similique. Quidem est quod expedita.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 9,
          title: 'test document 8',
          body: 'Exercitationem eum sed quos animi. Nam vel tempora id ullam repellendus illum qui perspiciatis nemo. Alias et laudantium natus aliquam. Dolores voluptatum ut. Quia non ut mollitia voluptas et.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 10,
          title: 'test document 9',
          body: 'Voluptatem voluptatem quod exercitationem quo ut earum nisi. Magnam quas dolores sit vel animi vitae. Molestiae sint accusamus quibusdam odio necessitatibus. Quos quis qui.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 11,
          title: 'test document 10',
          body: 'Veniam doloribus vel. Non vel quidem velit et soluta. Sequi et rerum ut numquam labore maiores excepturi corporis provident. Voluptas molestias veniam nam natus eligendi voluptate provident sequi. Inventore qui suscipit ut eos placeat autem repudiandae exercitationem aut.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 12,
          title: 'test document 11',
          body: 'Omnis explicabo voluptas exercitationem qui voluptate ipsam voluptatum. Minus esse impedit dolor ut itaque nihil accusamus praesentium officia. Vel quia voluptates aut iure facilis consequatur veniam et veritatis. Reprehenderit quia veritatis quis eos itaque. Et itaque quo voluptas qui dolorum voluptatem ipsa. Quidem voluptas saepe nesciunt optio.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 13,
          title: 'test document 12',
          body: 'Impedit quisquam non. Tempora distinctio corporis. Et aperiam praesentium dolor alias eum.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 14,
          title: 'test document 13',
          body: 'Ratione enim fugiat iure veniam dolorem sed vero unde. Dolorem quia iusto quidem. Ut voluptates non molestiae quos facere rerum animi et quos. Quisquam et quia velit sit quis magni. Autem similique natus et blanditiis vel dolorem. Perspiciatis repudiandae incidunt temporibus maxime aut ut enim.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 15,
          title: 'test document 14',
          body: 'Non perspiciatis doloribus voluptate odio consequuntur sed sed aperiam explicabo. Et porro est odio omnis. Reiciendis repellendus ut corrupti accusantium. Et omnis nam inventore nostrum alias non aliquid quis. Sequi vel est modi omnis laborum.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 16,
          title: 'test document 15',
          body: 'Modi sed dicta. Voluptas facere veritatis corporis qui est voluptatibus voluptatem reprehenderit. Enim corrupti qui quibusdam cupiditate illum odit quibusdam. Nihil non ad omnis ut laborum sunt est.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 17,
          title: 'test document 16',
          body: 'Cum sequi ad iusto voluptatem ex omnis incidunt iusto. Quia beatae porro sit. Vel eos voluptatem repudiandae. Exercitationem debitis veritatis id.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 18,
          title: 'test document 17',
          body: 'Aut quo enim deleniti ipsam. Harum dolorum et culpa minus numquam est quas. Enim labore qui quo et. Aspernatur qui sequi rem vero recusandae ullam omnis. Sunt cupiditate velit aperiam quia tempore sit aperiam praesentium.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }, {
          id: 19,
          title: 'test document 18',
          body: 'Exercitationem et fuga rerum laborum qui ipsa fuga. Et voluptas tempore quod laudantium repellat nesciunt ut. Ex ut in sit et nihil architecto ad. Recusandae ut rerum autem rerum odit dolore doloribus.',
          access: 'public',
          ownerRoleId: 2,
          createdAt: '2017-05-19T18:54:41.705Z',
          updatedAt: '2017-05-19T18:54:41.705Z',
          userId: 1,
          User: {
            fullname: 'Marlon Paucek',
          },
        }],
        MyDocuments: [],
        AuthToViewDocuments: [],
        allDocuments: [],
      },
      user: [],
      role: [],
    }, {
      type: 'LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS',
      AuthorizeToViewDocuments: [{
        id: 19,
        title: 'test document 18',
        body: 'Exercitationem et fuga rerum laborum qui ipsa fuga. Et voluptas tempore quod laudantium repellat nesciunt ut. Ex ut in sit et nihil architecto ad. Recusandae ut rerum autem rerum odit dolore doloribus.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 18,
        title: 'test document 17',
        body: 'Aut quo enim deleniti ipsam. Harum dolorum et culpa minus numquam est quas. Enim labore qui quo et. Aspernatur qui sequi rem vero recusandae ullam omnis. Sunt cupiditate velit aperiam quia tempore sit aperiam praesentium.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 17,
        title: 'test document 16',
        body: 'Cum sequi ad iusto voluptatem ex omnis incidunt iusto. Quia beatae porro sit. Vel eos voluptatem repudiandae. Exercitationem debitis veritatis id.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 16,
        title: 'test document 15',
        body: 'Modi sed dicta. Voluptas facere veritatis corporis qui est voluptatibus voluptatem reprehenderit. Enim corrupti qui quibusdam cupiditate illum odit quibusdam. Nihil non ad omnis ut laborum sunt est.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 15,
        title: 'test document 14',
        body: 'Non perspiciatis doloribus voluptate odio consequuntur sed sed aperiam explicabo. Et porro est odio omnis. Reiciendis repellendus ut corrupti accusantium. Et omnis nam inventore nostrum alias non aliquid quis. Sequi vel est modi omnis laborum.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 14,
        title: 'test document 13',
        body: 'Ratione enim fugiat iure veniam dolorem sed vero unde. Dolorem quia iusto quidem. Ut voluptates non molestiae quos facere rerum animi et quos. Quisquam et quia velit sit quis magni. Autem similique natus et blanditiis vel dolorem. Perspiciatis repudiandae incidunt temporibus maxime aut ut enim.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 13,
        title: 'test document 12',
        body: 'Impedit quisquam non. Tempora distinctio corporis. Et aperiam praesentium dolor alias eum.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 12,
        title: 'test document 11',
        body: 'Omnis explicabo voluptas exercitationem qui voluptate ipsam voluptatum. Minus esse impedit dolor ut itaque nihil accusamus praesentium officia. Vel quia voluptates aut iure facilis consequatur veniam et veritatis. Reprehenderit quia veritatis quis eos itaque. Et itaque quo voluptas qui dolorum voluptatem ipsa. Quidem voluptas saepe nesciunt optio.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 11,
        title: 'test document 10',
        body: 'Veniam doloribus vel. Non vel quidem velit et soluta. Sequi et rerum ut numquam labore maiores excepturi corporis provident. Voluptas molestias veniam nam natus eligendi voluptate provident sequi. Inventore qui suscipit ut eos placeat autem repudiandae exercitationem aut.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 10,
        title: 'test document 9',
        body: 'Voluptatem voluptatem quod exercitationem quo ut earum nisi. Magnam quas dolores sit vel animi vitae. Molestiae sint accusamus quibusdam odio necessitatibus. Quos quis qui.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 9,
        title: 'test document 8',
        body: 'Exercitationem eum sed quos animi. Nam vel tempora id ullam repellendus illum qui perspiciatis nemo. Alias et laudantium natus aliquam. Dolores voluptatum ut. Quia non ut mollitia voluptas et.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 8,
        title: 'test document 7',
        body: 'Reprehenderit nulla ut iusto vitae assumenda et aut nesciunt hic. Adipisci est nostrum autem aliquid dignissimos. Minus suscipit similique. Quidem est quod expedita.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 7,
        title: 'test document 6',
        body: 'Nihil numquam omnis. Ut excepturi assumenda dolorem maxime. Illum ut ullam voluptatum consequatur eligendi non eos dolore. Omnis sequi distinctio molestias. Nihil molestias pariatur. Ut voluptatibus est fugit molestiae.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 6,
        title: 'test document 5',
        body: 'Repellendus amet sapiente nam neque. In fuga est velit possimus dicta. Nihil pariatur sunt repellat minus. Blanditiis suscipit qui enim illum placeat voluptatem.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 5,
        title: 'test document 4',
        body: 'Ducimus quasi unde. Rerum laudantium ducimus alias. Optio recusandae consequatur laboriosam nesciunt ut. Nihil mollitia eum et rerum et qui quia sint. Delectus delectus officiis exercitationem dolor corporis doloremque deserunt ea eos.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 4,
        title: 'test document 3',
        body: 'Ut ipsa alias est vero voluptatem voluptatem adipisci eos. Quia velit alias ea dolore. Sed rerum aut dolore veniam ipsa hic quo laboriosam. Aut hic sed. Est esse et minima alias voluptatem in porro pariatur accusamus. Mollitia illum molestias libero rerum quisquam.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 3,
        title: 'test document 2',
        body: 'Mollitia ea accusantium debitis adipisci odio nam neque. Earum nam atque non ab doloribus. Iusto ratione aut officiis et omnis rerum aut odit.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
        },
      }, {
        id: 2,
        title: 'Fake title document',
        body: 'Quidem qui cum voluptas natus est adipisci placeat aliquid aut. Qui reiciendis voluptatibus officia dolores consequatur est. Accusamus et repellat dolores officiis aut fuga voluptas.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-05-19T18:54:41.705Z',
        updatedAt: '2017-05-19T18:54:41.705Z',
        userId: 1,
        User: {
          fullname: 'Marlon Paucek',
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
            username: 'jed',
            fullname: 'jed',
            roleId: 3,
            email: 'jed@email.com',
          },
        },
        documents: {
          PublicDocuments: [{
            id: 2,
            title: 'Fake title document',
            body: 'Quidem qui cum voluptas natus est adipisci placeat aliquid aut. Qui reiciendis voluptatibus officia dolores consequatur est. Accusamus et repellat dolores officiis aut fuga voluptas.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 3,
            title: 'test document 2',
            body: 'Mollitia ea accusantium debitis adipisci odio nam neque. Earum nam atque non ab doloribus. Iusto ratione aut officiis et omnis rerum aut odit.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 4,
            title: 'test document 3',
            body: 'Ut ipsa alias est vero voluptatem voluptatem adipisci eos. Quia velit alias ea dolore. Sed rerum aut dolore veniam ipsa hic quo laboriosam. Aut hic sed. Est esse et minima alias voluptatem in porro pariatur accusamus. Mollitia illum molestias libero rerum quisquam.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 5,
            title: 'test document 4',
            body: 'Ducimus quasi unde. Rerum laudantium ducimus alias. Optio recusandae consequatur laboriosam nesciunt ut. Nihil mollitia eum et rerum et qui quia sint. Delectus delectus officiis exercitationem dolor corporis doloremque deserunt ea eos.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 6,
            title: 'test document 5',
            body: 'Repellendus amet sapiente nam neque. In fuga est velit possimus dicta. Nihil pariatur sunt repellat minus. Blanditiis suscipit qui enim illum placeat voluptatem.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 7,
            title: 'test document 6',
            body: 'Nihil numquam omnis. Ut excepturi assumenda dolorem maxime. Illum ut ullam voluptatum consequatur eligendi non eos dolore. Omnis sequi distinctio molestias. Nihil molestias pariatur. Ut voluptatibus est fugit molestiae.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 8,
            title: 'test document 7',
            body: 'Reprehenderit nulla ut iusto vitae assumenda et aut nesciunt hic. Adipisci est nostrum autem aliquid dignissimos. Minus suscipit similique. Quidem est quod expedita.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 9,
            title: 'test document 8',
            body: 'Exercitationem eum sed quos animi. Nam vel tempora id ullam repellendus illum qui perspiciatis nemo. Alias et laudantium natus aliquam. Dolores voluptatum ut. Quia non ut mollitia voluptas et.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 10,
            title: 'test document 9',
            body: 'Voluptatem voluptatem quod exercitationem quo ut earum nisi. Magnam quas dolores sit vel animi vitae. Molestiae sint accusamus quibusdam odio necessitatibus. Quos quis qui.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 11,
            title: 'test document 10',
            body: 'Veniam doloribus vel. Non vel quidem velit et soluta. Sequi et rerum ut numquam labore maiores excepturi corporis provident. Voluptas molestias veniam nam natus eligendi voluptate provident sequi. Inventore qui suscipit ut eos placeat autem repudiandae exercitationem aut.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 12,
            title: 'test document 11',
            body: 'Omnis explicabo voluptas exercitationem qui voluptate ipsam voluptatum. Minus esse impedit dolor ut itaque nihil accusamus praesentium officia. Vel quia voluptates aut iure facilis consequatur veniam et veritatis. Reprehenderit quia veritatis quis eos itaque. Et itaque quo voluptas qui dolorum voluptatem ipsa. Quidem voluptas saepe nesciunt optio.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 13,
            title: 'test document 12',
            body: 'Impedit quisquam non. Tempora distinctio corporis. Et aperiam praesentium dolor alias eum.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 14,
            title: 'test document 13',
            body: 'Ratione enim fugiat iure veniam dolorem sed vero unde. Dolorem quia iusto quidem. Ut voluptates non molestiae quos facere rerum animi et quos. Quisquam et quia velit sit quis magni. Autem similique natus et blanditiis vel dolorem. Perspiciatis repudiandae incidunt temporibus maxime aut ut enim.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 15,
            title: 'test document 14',
            body: 'Non perspiciatis doloribus voluptate odio consequuntur sed sed aperiam explicabo. Et porro est odio omnis. Reiciendis repellendus ut corrupti accusantium. Et omnis nam inventore nostrum alias non aliquid quis. Sequi vel est modi omnis laborum.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 16,
            title: 'test document 15',
            body: 'Modi sed dicta. Voluptas facere veritatis corporis qui est voluptatibus voluptatem reprehenderit. Enim corrupti qui quibusdam cupiditate illum odit quibusdam. Nihil non ad omnis ut laborum sunt est.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 17,
            title: 'test document 16',
            body: 'Cum sequi ad iusto voluptatem ex omnis incidunt iusto. Quia beatae porro sit. Vel eos voluptatem repudiandae. Exercitationem debitis veritatis id.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 18,
            title: 'test document 17',
            body: 'Aut quo enim deleniti ipsam. Harum dolorum et culpa minus numquam est quas. Enim labore qui quo et. Aspernatur qui sequi rem vero recusandae ullam omnis. Sunt cupiditate velit aperiam quia tempore sit aperiam praesentium.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 19,
            title: 'test document 18',
            body: 'Exercitationem et fuga rerum laborum qui ipsa fuga. Et voluptas tempore quod laudantium repellat nesciunt ut. Ex ut in sit et nihil architecto ad. Recusandae ut rerum autem rerum odit dolore doloribus.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }],
          MyDocuments: [],
          AuthToViewDocuments: [],
          allDocuments: [],
          AuthorizeToViewDocuments: [{
            id: 19,
            title: 'test document 18',
            body: 'Exercitationem et fuga rerum laborum qui ipsa fuga. Et voluptas tempore quod laudantium repellat nesciunt ut. Ex ut in sit et nihil architecto ad. Recusandae ut rerum autem rerum odit dolore doloribus.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 18,
            title: 'test document 17',
            body: 'Aut quo enim deleniti ipsam. Harum dolorum et culpa minus numquam est quas. Enim labore qui quo et. Aspernatur qui sequi rem vero recusandae ullam omnis. Sunt cupiditate velit aperiam quia tempore sit aperiam praesentium.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 17,
            title: 'test document 16',
            body: 'Cum sequi ad iusto voluptatem ex omnis incidunt iusto. Quia beatae porro sit. Vel eos voluptatem repudiandae. Exercitationem debitis veritatis id.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 16,
            title: 'test document 15',
            body: 'Modi sed dicta. Voluptas facere veritatis corporis qui est voluptatibus voluptatem reprehenderit. Enim corrupti qui quibusdam cupiditate illum odit quibusdam. Nihil non ad omnis ut laborum sunt est.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 15,
            title: 'test document 14',
            body: 'Non perspiciatis doloribus voluptate odio consequuntur sed sed aperiam explicabo. Et porro est odio omnis. Reiciendis repellendus ut corrupti accusantium. Et omnis nam inventore nostrum alias non aliquid quis. Sequi vel est modi omnis laborum.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 14,
            title: 'test document 13',
            body: 'Ratione enim fugiat iure veniam dolorem sed vero unde. Dolorem quia iusto quidem. Ut voluptates non molestiae quos facere rerum animi et quos. Quisquam et quia velit sit quis magni. Autem similique natus et blanditiis vel dolorem. Perspiciatis repudiandae incidunt temporibus maxime aut ut enim.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 13,
            title: 'test document 12',
            body: 'Impedit quisquam non. Tempora distinctio corporis. Et aperiam praesentium dolor alias eum.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 12,
            title: 'test document 11',
            body: 'Omnis explicabo voluptas exercitationem qui voluptate ipsam voluptatum. Minus esse impedit dolor ut itaque nihil accusamus praesentium officia. Vel quia voluptates aut iure facilis consequatur veniam et veritatis. Reprehenderit quia veritatis quis eos itaque. Et itaque quo voluptas qui dolorum voluptatem ipsa. Quidem voluptas saepe nesciunt optio.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 11,
            title: 'test document 10',
            body: 'Veniam doloribus vel. Non vel quidem velit et soluta. Sequi et rerum ut numquam labore maiores excepturi corporis provident. Voluptas molestias veniam nam natus eligendi voluptate provident sequi. Inventore qui suscipit ut eos placeat autem repudiandae exercitationem aut.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 10,
            title: 'test document 9',
            body: 'Voluptatem voluptatem quod exercitationem quo ut earum nisi. Magnam quas dolores sit vel animi vitae. Molestiae sint accusamus quibusdam odio necessitatibus. Quos quis qui.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 9,
            title: 'test document 8',
            body: 'Exercitationem eum sed quos animi. Nam vel tempora id ullam repellendus illum qui perspiciatis nemo. Alias et laudantium natus aliquam. Dolores voluptatum ut. Quia non ut mollitia voluptas et.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 8,
            title: 'test document 7',
            body: 'Reprehenderit nulla ut iusto vitae assumenda et aut nesciunt hic. Adipisci est nostrum autem aliquid dignissimos. Minus suscipit similique. Quidem est quod expedita.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 7,
            title: 'test document 6',
            body: 'Nihil numquam omnis. Ut excepturi assumenda dolorem maxime. Illum ut ullam voluptatum consequatur eligendi non eos dolore. Omnis sequi distinctio molestias. Nihil molestias pariatur. Ut voluptatibus est fugit molestiae.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 6,
            title: 'test document 5',
            body: 'Repellendus amet sapiente nam neque. In fuga est velit possimus dicta. Nihil pariatur sunt repellat minus. Blanditiis suscipit qui enim illum placeat voluptatem.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 5,
            title: 'test document 4',
            body: 'Ducimus quasi unde. Rerum laudantium ducimus alias. Optio recusandae consequatur laboriosam nesciunt ut. Nihil mollitia eum et rerum et qui quia sint. Delectus delectus officiis exercitationem dolor corporis doloremque deserunt ea eos.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 4,
            title: 'test document 3',
            body: 'Ut ipsa alias est vero voluptatem voluptatem adipisci eos. Quia velit alias ea dolore. Sed rerum aut dolore veniam ipsa hic quo laboriosam. Aut hic sed. Est esse et minima alias voluptatem in porro pariatur accusamus. Mollitia illum molestias libero rerum quisquam.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 3,
            title: 'test document 2',
            body: 'Mollitia ea accusantium debitis adipisci odio nam neque. Earum nam atque non ab doloribus. Iusto ratione aut officiis et omnis rerum aut odit.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }, {
            id: 2,
            title: 'Fake title document',
            body: 'Quidem qui cum voluptas natus est adipisci placeat aliquid aut. Qui reiciendis voluptatibus officia dolores consequatur est. Accusamus et repellat dolores officiis aut fuga voluptas.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-05-19T18:54:41.705Z',
            updatedAt: '2017-05-19T18:54:41.705Z',
            userId: 1,
            User: {
              fullname: 'Marlon Paucek',
            },
          }],
        },
        user: [],
        role: [],
      });
  });

  it('should handle CREATE_USER_ROLE_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [{
        id: 1,
        text: 'Role created successfully',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 3,
          username: 'jed',
          fullname: 'jed',
          roleId: 1,
          email: 'jed@email.com',
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
      type: 'CREATE_USER_ROLE_SUCCESS',
    });
    expect(state)
      .toEqual({
        flashMessages: [{
          id: 1,
          text: 'Role created successfully',
        }],
        login: {
          isAuthenticated: true,
          user: {
            id: 3,
            username: 'jed',
            fullname: 'jed',
            roleId: 1,
            email: 'jed@email.com',
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
      });
  });

  it('should handle DELETE_USER_ROLE_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [{
        id: 1,
        text: 'Role deleted succesfully',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 3,
          username: 'jed',
          fullname: 'jed',
          roleId: 1,
          email: 'jed@email.com',
        },
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: [],
        AuthToViewDocuments: [],
        allDocuments: [],
      },
      user: [],
      role: {
        allRoles: [{
          id: 1,
          title: 'Administrator',
          createdAt: '2017-05-19T18:54:41.579Z',
          updatedAt: '2017-05-19T18:54:41.579Z',
        }, {
          id: 2,
          title: 'Tester',
          createdAt: '2017-05-19T18:54:41.579Z',
          updatedAt: '2017-05-19T18:54:41.579Z',
        }, {
          id: 3,
          title: 'Basic',
          createdAt: '2017-05-19T18:54:41.579Z',
          updatedAt: '2017-05-19T18:54:41.579Z',
        }, {
          id: 4,
          title: ' JED',
          createdAt: '2017-05-20T14:16:23.029Z',
          updatedAt: '2017-05-20T14:16:23.029Z',
        }],
      },
    }, {
      type: 'DELETE_USER_ROLE_SUCCESS',
      roleId: 1,
    });
    expect(state)
      .toEqual({
        flashMessages: [{
          id: 1,
          text: 'Role deleted succesfully',
        }],
        login: {
          isAuthenticated: true,
          user: {
            id: 3,
            username: 'jed',
            fullname: 'jed',
            roleId: 1,
            email: 'jed@email.com',
          },
        },
        documents: {
          PublicDocuments: [],
          MyDocuments: [],
          AuthToViewDocuments: [],
          allDocuments: [],
        },
        user: [],
        role: {
          allRoles: [{
            id: 2,
            title: 'Tester',
            createdAt: '2017-05-19T18:54:41.579Z',
            updatedAt: '2017-05-19T18:54:41.579Z',
          }, {
            id: 3,
            title: 'Basic',
            createdAt: '2017-05-19T18:54:41.579Z',
            updatedAt: '2017-05-19T18:54:41.579Z',
          }, {
            id: 4,
            title: ' JED',
            createdAt: '2017-05-20T14:16:23.029Z',
            updatedAt: '2017-05-20T14:16:23.029Z',
          }],
        },
      });
  });

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
    const state = reducers({ flashMessages: [], login: { isAuthenticated: true, user: { id: 3, username: 'q', fullname: 'q', roleId: 1, email: 'qq1be@email.com' }, allUsers: [{ id: 1, fullname: 'jonathan doe', username: 'john doe', email: 'Lauren52@hotmail.com', roleId: 3, password: '$2a$08$wR9H1v9aTlotDRbghNFvvO2Q4C7Kgp9ALlhUf/1XcOci41iFIBVLG', createdAt: '2017-05-20T14:34:31.085Z', updatedAt: '2017-05-20T14:34:31.097Z' }, { id: 2, fullname: 'Bill Rosenbaum', username: 'Baron.Schamberger', email: 'Alexanne_OKon25@hotmail.com', roleId: 3, password: '$2a$08$37RnX6KymnY4WPE2nNcaIukhQv3KGLYmqLuKOir08s6fysWb36FBS', createdAt: '2017-05-20T14:34:31.085Z', updatedAt: '2017-05-20T14:34:31.097Z' }, { id: 3, fullname: 'q', username: 'q', email: 'qq1be@email.com', roleId: 1, password: '$2a$08$/wc8Z.1yhODSKT9JN7t2EeFQ9pjwnnsVzYBirGcuscL9Z0rsMqIXW', createdAt: '2017-05-20T14:35:51.928Z', updatedAt: '2017-05-20T14:35:51.928Z' }, { id: 20, fullname: 'Brenna Konopelskia', username: 'Furman67', email: 'Litzy_Kutch24@hotmail.com', roleId: 1, password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.', createdAt: '2017-05-20T14:34:31.085Z', updatedAt: '2017-05-20T14:36:39.503Z' }] }, documents: { PublicDocuments: [], MyDocuments: [], AuthToViewDocuments: [], allDocuments: [] }, user: [], role: [] }, { type: 'LOAD_ALL_USERS_SUCCESS', users: [{ id: 1, fullname: 'jonathan doe', username: 'john doe', email: 'Lauren52@hotmail.com', roleId: 3, password: '$2a$08$wR9H1v9aTlotDRbghNFvvO2Q4C7Kgp9ALlhUf/1XcOci41iFIBVLG', createdAt: '2017-05-20T14:34:31.085Z', updatedAt: '2017-05-20T14:34:31.097Z' }, { id: 2, fullname: 'Bill Rosenbaum', username: 'Baron.Schamberger', email: 'Alexanne_OKon25@hotmail.com', roleId: 3, password: '$2a$08$37RnX6KymnY4WPE2nNcaIukhQv3KGLYmqLuKOir08s6fysWb36FBS', createdAt: '2017-05-20T14:34:31.085Z', updatedAt: '2017-05-20T14:34:31.097Z' }, { id: 3, fullname: 'q', username: 'q', email: 'qq1be@email.com', roleId: 1, password: '$2a$08$/wc8Z.1yhODSKT9JN7t2EeFQ9pjwnnsVzYBirGcuscL9Z0rsMqIXW', createdAt: '2017-05-20T14:35:51.928Z', updatedAt: '2017-05-20T14:35:51.928Z' }, { id: 20, fullname: 'Brenna Konopelskia', username: 'Furman67', email: 'Litzy_Kutch24@hotmail.com', roleId: 1, password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.', createdAt: '2017-05-20T14:34:31.085Z', updatedAt: '2017-05-20T14:36:39.503Z' }] });
    expect(state).toEqual({ flashMessages: [], login: { isAuthenticated: true, user: { id: 3, username: 'q', fullname: 'q', roleId: 1, email: 'qq1be@email.com' }, allUsers: [{ id: 1, fullname: 'jonathan doe', username: 'john doe', email: 'Lauren52@hotmail.com', roleId: 3, password: '$2a$08$wR9H1v9aTlotDRbghNFvvO2Q4C7Kgp9ALlhUf/1XcOci41iFIBVLG', createdAt: '2017-05-20T14:34:31.085Z', updatedAt: '2017-05-20T14:34:31.097Z' }, { id: 2, fullname: 'Bill Rosenbaum', username: 'Baron.Schamberger', email: 'Alexanne_OKon25@hotmail.com', roleId: 3, password: '$2a$08$37RnX6KymnY4WPE2nNcaIukhQv3KGLYmqLuKOir08s6fysWb36FBS', createdAt: '2017-05-20T14:34:31.085Z', updatedAt: '2017-05-20T14:34:31.097Z' }, { id: 3, fullname: 'q', username: 'q', email: 'qq1be@email.com', roleId: 1, password: '$2a$08$/wc8Z.1yhODSKT9JN7t2EeFQ9pjwnnsVzYBirGcuscL9Z0rsMqIXW', createdAt: '2017-05-20T14:35:51.928Z', updatedAt: '2017-05-20T14:35:51.928Z' }, { id: 20, fullname: 'Brenna Konopelskia', username: 'Furman67', email: 'Litzy_Kutch24@hotmail.com', roleId: 1, password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.', createdAt: '2017-05-20T14:34:31.085Z', updatedAt: '2017-05-20T14:36:39.503Z' }] }, documents: { PublicDocuments: [], MyDocuments: [], AuthToViewDocuments: [], allDocuments: [] }, user: [], role: [] });
  });

  it('should handle SEARCH_USER_BY_USERNAME actions', () => {
    const state = reducers({ flashMessages: [], login: { isAuthenticated: true, user: { id: 3, username: 'q', fullname: 'q', roleId: 1, email: 'qq1be@email.com' }, allUsers: [{ id: 1, fullname: 'jonathan doe', username: 'john doe', email: 'Lauren52@hotmail.com', roleId: 3, password: '$2a$08$wR9H1v9aTlotDRbghNFvvO2Q4C7Kgp9ALlhUf/1XcOci41iFIBVLG', createdAt: '2017-05-20T14:34:31.085Z', updatedAt: '2017-05-20T14:34:31.097Z' }, { id: 2, fullname: 'Bill Rosenbaum', username: 'Baron.Schamberger', email: 'Alexanne_OKon25@hotmail.com', roleId: 3, password: '$2a$08$37RnX6KymnY4WPE2nNcaIukhQv3KGLYmqLuKOir08s6fysWb36FBS', createdAt: '2017-05-20T14:34:31.085Z', updatedAt: '2017-05-20T14:34:31.097Z' }, { id: 3, fullname: 'q', username: 'q', email: 'qq1be@email.com', roleId: 1, password: '$2a$08$/wc8Z.1yhODSKT9JN7t2EeFQ9pjwnnsVzYBirGcuscL9Z0rsMqIXW', createdAt: '2017-05-20T14:35:51.928Z', updatedAt: '2017-05-20T14:35:51.928Z' }, { id: 20, fullname: 'Brenna Konopelskia', username: 'Furman67', email: 'Litzy_Kutch24@hotmail.com', roleId: 1, password: '$2a$08$4OMV9XtU1RVl404dK2UfAOmdt6nRZby1.wqAbzetcljzNF18LN3t.', createdAt: '2017-05-20T14:34:31.085Z', updatedAt: '2017-05-20T14:36:39.503Z' }] }, documents: { PublicDocuments: [], MyDocuments: [], AuthToViewDocuments: [], allDocuments: [] }, user: [], role: [] }, { type: 'SEARCH_USER_BY_USERNAME_SUCCESS', users: [] });
    expect(state).toEqual({ flashMessages: [], login: { isAuthenticated: true, user: { id: 3, username: 'q', fullname: 'q', roleId: 1, email: 'qq1be@email.com' }, allUsers: [] }, documents: { PublicDocuments: [], MyDocuments: [], AuthToViewDocuments: [], allDocuments: [] }, user: [], role: [] });
  });

  it('should handle SEARCH_DOCUMENTS_BY_TITLE_SUCCESS actions', () => {
    const state = reducers({ flashMessages: [], login: { isAuthenticated: true, user: { id: 3, username: 'q', fullname: 'q', roleId: 1, email: 'qq1be@email.com' } }, documents: { PublicDocuments: [], MyDocuments: [], AuthToViewDocuments: [], allDocuments: [] }, user: [], role: [] }, { type: 'SEARCH_DOCUMENTS_BY_TITLE_SUCCESS', searchDocuments: [] });
    expect(state).toEqual({ flashMessages: [], login: { isAuthenticated: true, user: { id: 3, username: 'q', fullname: 'q', roleId: 1, email: 'qq1be@email.com' } }, documents: { PublicDocuments: [], MyDocuments: [], AuthToViewDocuments: [], allDocuments: [] }, user: [], role: [] });
  });
});
