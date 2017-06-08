import expect from 'expect';
import reducers from '../../reducers/';

describe('Document Reducers', () => {
  it('should handle LOAD_USER_DOCUMENT_SUCCESS actions', () => {
    const expectedState = {
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
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: {
          count: 2,
          documents: [{
            id: 29,
            title: 'qqq',
            body: 'qqq',
            access: 'public',
            ownerRoleId: 1,
            createdAt: '2017-06-06T13:24:28.872Z',
            updatedAt: '2017-06-06T13:24:28.872Z',
            userId: 4,
            User: {
              fullname: 'q',
            },
          }, {
            id: 27,
            title: ' dd',
            body: ' ddfffffffff',
            access: 'private',
            ownerRoleId: 3,
            createdAt: '2017-06-05T11:56:26.838Z',
            updatedAt: '2017-06-05T12:03:34.687Z',
            userId: 4,
            User: {
              fullname: 'q',
            },
          }],
        },
        AuthToViewDocuments: [],
        allDocuments: [],
      },
      user: [],
      role: [],
    };
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
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: {
          count: 2,
          documents: [{
            id: 29,
            title: 'qqq',
            body: 'qqq',
            access: 'public',
            ownerRoleId: 1,
            createdAt: '2017-06-06T13:24:28.872Z',
            updatedAt: '2017-06-06T13:24:28.872Z',
            userId: 4,
            User: {
              fullname: 'q',
            },
          }, {
            id: 27,
            title: ' dd',
            body: ' ddfffffffff',
            access: 'private',
            ownerRoleId: 3,
            createdAt: '2017-06-05T11:56:26.838Z',
            updatedAt: '2017-06-05T12:03:34.687Z',
            userId: 4,
            User: {
              fullname: 'q',
            },
          }],
        },
        AuthToViewDocuments: [],
        allDocuments: [],
      },
      user: [],
      role: [],
    }, {
      type: 'LOAD_USER_DOCUMENT_SUCCESS',
      MyDocuments: [{
        id: 29,
        title: 'qqq',
        body: 'qqq',
        access: 'public',
        ownerRoleId: 1,
        createdAt: '2017-06-06T13:24:28.872Z',
        updatedAt: '2017-06-06T13:24:28.872Z',
        userId: 4,
        User: {
          fullname: 'q',
        },
      }, {
        id: 27,
        title: ' dd',
        body: ' ddfffffffff',
        access: 'private',
        ownerRoleId: 3,
        createdAt: '2017-06-05T11:56:26.838Z',
        updatedAt: '2017-06-05T12:03:34.687Z',
        userId: 4,
        User: {
          fullname: 'q',
        },
      }],
      count: 2,
    });

    // Assertion
    expect(state)
      .toEqual(expectedState);
  });

  it('should handle UPDATE_USER_DOCUMENT_SUCCESS actions', () => {
    const expectedState = {
      flashMessages: [{
        id: 1,
        text: 'Document successfuly updated',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 6,
          username: 'jed',
          fullname: 'jed',
          roleId: 3,
          email: 'jed@email.com',
        },
      },
      documents: {
        MyDocuments: {
          documents: [{
            id: 40,
            title: 'dd1',
            body: 'ddd',
            access: 'public',
            ownerRoleId: 3,
            createdAt: '2017-06-06T14:29:24.091Z',
            updatedAt: '2017-06-06T14:29:38.651Z',
            userId: 6,
          }],
        },
      },
      user: [],
      role: [],
    };
    const state = reducers({
      flashMessages: [{
        id: 1,
        text: 'Document successfuly updated',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 6,
          username: 'jed',
          fullname: 'jed',
          roleId: 3,
          email: 'jed@email.com',
        },
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: {
          documents: [{
            id: 40,
            title: 'dd',
            body: 'ddd',
            access: 'public',
            ownerRoleId: 3,
            createdAt: '2017-06-06T14:29:24.091Z',
            updatedAt: '2017-06-06T14:29:24.091Z',
            userId: 6,
            User: {
              fullname: 'jed',
            },
          }],
        },
        AuthToViewDocuments: [],
        allDocuments: [],
      },
      user: [],
      role: [],
    }, {
      type: 'UPDATE_USER_DOCUMENT_SUCCESS',
      document: {
        id: 40,
        title: 'dd1',
        body: 'ddd',
        access: 'public',
        ownerRoleId: 3,
        createdAt: '2017-06-06T14:29:24.091Z',
        updatedAt: '2017-06-06T14:29:38.651Z',
        userId: 6,
      },
      documentId: 40,
    });

    // Assertion
    expect(state)
      .toEqual(expectedState);
  });

  it('should handle DELETE_USER_DOCUMENT_SUCCESS actions', () => {
    const expectedState = {
      flashMessages: [{
        id: 1,
        text: 'Document deleted successfully.',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 6,
          username: 'jed',
          fullname: 'jed',
          roleId: 3,
          email: 'jed@email.com',
        },
      },
      documents: {
        MyDocuments: {
          documents: [],
        },
      },
      user: [],
      role: [],
    };
    const state = reducers({
      flashMessages: [{
        id: 1,
        text: 'Document deleted successfully.',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 6,
          username: 'jed',
          fullname: 'jed',
          roleId: 3,
          email: 'jed@email.com',
        },
      },
      documents: {
        MyDocuments: {
          documents: [{
            id: 40,
            title: 'dd1',
            body: 'ddd',
            access: 'public',
            ownerRoleId: 3,
            createdAt: '2017-06-06T14:29:24.091Z',
            updatedAt: '2017-06-06T14:29:38.651Z',
            userId: 6,
          }],
        },
      },
      user: [],
      role: [],
    }, {
      type: 'DELETE_USER_DOCUMENT_SUCCESS',
      documentId: 40,
    });

    // Assertion
    expect(state)
      .toEqual(expectedState);
  });

  it('should handle LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS actions', () => {
    const expectedState = {
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
    };
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

    // Assertion
    expect(state)
      .toEqual(expectedState);
  });

  it('should handle LOAD_AUTHORIZED_TO_VIEW_DOCUMENT_SUCCESS actions', () => {
    const expectedState = {
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
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: {
          documents: [{
            id: 29,
            title: 'qqq',
            body: 'qqq',
            access: 'public',
            ownerRoleId: 1,
            createdAt: '2017-06-06T13:24:28.872Z',
            updatedAt: '2017-06-06T13:24:28.872Z',
            userId: 4,
            User: {
              fullname: 'q',
            },
          }],
        },
        AuthToViewDocuments: [],
        allDocuments: [],
        AuthorizeToViewDocuments: {
          count: 15,
          page: 1,
          pageCount: 2,
          pageSize: 8,
          totalCount: 15,
          documents: [{
            id: 1,
            title: 'modi quo eaque',
            body: 'Officia maxime nemo assumenda rem provident similique.',
            access: 'private',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 7,
            title: 'test document 6',
            body: 'Rem numquam laborum vitae est necessitatibus ut velit cupiditate. Alias rerum laborum et dolorum. Omnis illo explicabo. Distinctio omnis consectetur impedit aliquid. Quibusdam qui et fugit explicabo possimus similique.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 8,
            title: 'test document 7',
            body: 'Ut neque rerum et eos eos dolores nihil. Corporis in vero quos maiores eos. Qui id quibusdam soluta labore quo molestiae cupiditate quis reiciendis. Et deserunt aut repudiandae aut quod consequatur neque aut.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 11,
            title: 'test document 10',
            body: 'Officiis corporis tempore. Perspiciatis labore itaque sit veritatis ut ratione esse dolor. Rerum voluptates similique debitis blanditiis qui recusandae. Ut libero iste. Enim quia aut.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 12,
            title: 'test document 11',
            body: 'Quis et eaque autem aut. Eum similique natus sunt blanditiis. Nostrum quia consequuntur. Distinctio alias ipsum. Omnis et non voluptatum dicta quia ea.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 13,
            title: 'test document 12',
            body: 'Eum corrupti odit dolorem cupiditate. Officiis possimus eos. Quos et sint incidunt.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 15,
            title: 'test document 14',
            body: 'Consequatur non odit quo. Ut mollitia incidunt porro quibusdam quidem accusantium. Rerum qui explicabo maiores ullam iste. Possimus ut dolorum praesentium et magni quidem et laboriosam fugit. Debitis quos perferendis aliquam sapiente nam velit.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 16,
            title: 'test document 15',
            body: 'Qui est ut aut ea voluptate enim. Nulla fuga excepturi minus nihil. Corrupti at exercitationem ducimus in enim sed veritatis. Ducimus et voluptatem odit officia. Doloribus soluta aut assumenda perferendis ducimus. A officia praesentium pariatur qui.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }],
        },
      },
      user: [],
      role: [],
    };
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
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: {
          documents: [{
            id: 29,
            title: 'qqq',
            body: 'qqq',
            access: 'public',
            ownerRoleId: 1,
            createdAt: '2017-06-06T13:24:28.872Z',
            updatedAt: '2017-06-06T13:24:28.872Z',
            userId: 4,
            User: {
              fullname: 'q',
            },
          }],
        },
        AuthToViewDocuments: [],
        allDocuments: [],
        AuthorizeToViewDocuments: {
          count: 15,
          page: 1,
          pageCount: 2,
          pageSize: 8,
          totalCount: 15,
          documents: [{
            id: 1,
            title: 'modi quo eaque',
            body: 'Officia maxime nemo assumenda rem provident similique.',
            access: 'private',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 7,
            title: 'test document 6',
            body: 'Rem numquam laborum vitae est necessitatibus ut velit cupiditate. Alias rerum laborum et dolorum. Omnis illo explicabo. Distinctio omnis consectetur impedit aliquid. Quibusdam qui et fugit explicabo possimus similique.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 8,
            title: 'test document 7',
            body: 'Ut neque rerum et eos eos dolores nihil. Corporis in vero quos maiores eos. Qui id quibusdam soluta labore quo molestiae cupiditate quis reiciendis. Et deserunt aut repudiandae aut quod consequatur neque aut.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 11,
            title: 'test document 10',
            body: 'Officiis corporis tempore. Perspiciatis labore itaque sit veritatis ut ratione esse dolor. Rerum voluptates similique debitis blanditiis qui recusandae. Ut libero iste. Enim quia aut.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 12,
            title: 'test document 11',
            body: 'Quis et eaque autem aut. Eum similique natus sunt blanditiis. Nostrum quia consequuntur. Distinctio alias ipsum. Omnis et non voluptatum dicta quia ea.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 13,
            title: 'test document 12',
            body: 'Eum corrupti odit dolorem cupiditate. Officiis possimus eos. Quos et sint incidunt.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 15,
            title: 'test document 14',
            body: 'Consequatur non odit quo. Ut mollitia incidunt porro quibusdam quidem accusantium. Rerum qui explicabo maiores ullam iste. Possimus ut dolorum praesentium et magni quidem et laboriosam fugit. Debitis quos perferendis aliquam sapiente nam velit.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }, {
            id: 16,
            title: 'test document 15',
            body: 'Qui est ut aut ea voluptate enim. Nulla fuga excepturi minus nihil. Corrupti at exercitationem ducimus in enim sed veritatis. Ducimus et voluptatem odit officia. Doloribus soluta aut assumenda perferendis ducimus. A officia praesentium pariatur qui.',
            access: 'public',
            ownerRoleId: 2,
            createdAt: '2017-06-05T11:53:33.457Z',
            updatedAt: '2017-06-05T11:53:33.457Z',
            userId: 1,
            User: {
              fullname: 'Samara Stracke PhD',
            },
          }],
        },
      },
      user: [],
      role: [],
    }, {
      type: 'LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS',
      AuthorizeToViewDocuments: [{
        id: 1,
        title: 'modi quo eaque',
        body: 'Officia maxime nemo assumenda rem provident similique.',
        access: 'private',
        ownerRoleId: 2,
        createdAt: '2017-06-05T11:53:33.457Z',
        updatedAt: '2017-06-05T11:53:33.457Z',
        userId: 1,
        User: {
          fullname: 'Samara Stracke PhD',
        },
      }, {
        id: 7,
        title: 'test document 6',
        body: 'Rem numquam laborum vitae est necessitatibus ut velit cupiditate. Alias rerum laborum et dolorum. Omnis illo explicabo. Distinctio omnis consectetur impedit aliquid. Quibusdam qui et fugit explicabo possimus similique.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-06-05T11:53:33.457Z',
        updatedAt: '2017-06-05T11:53:33.457Z',
        userId: 1,
        User: {
          fullname: 'Samara Stracke PhD',
        },
      }, {
        id: 8,
        title: 'test document 7',
        body: 'Ut neque rerum et eos eos dolores nihil. Corporis in vero quos maiores eos. Qui id quibusdam soluta labore quo molestiae cupiditate quis reiciendis. Et deserunt aut repudiandae aut quod consequatur neque aut.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-06-05T11:53:33.457Z',
        updatedAt: '2017-06-05T11:53:33.457Z',
        userId: 1,
        User: {
          fullname: 'Samara Stracke PhD',
        },
      }, {
        id: 11,
        title: 'test document 10',
        body: 'Officiis corporis tempore. Perspiciatis labore itaque sit veritatis ut ratione esse dolor. Rerum voluptates similique debitis blanditiis qui recusandae. Ut libero iste. Enim quia aut.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-06-05T11:53:33.457Z',
        updatedAt: '2017-06-05T11:53:33.457Z',
        userId: 1,
        User: {
          fullname: 'Samara Stracke PhD',
        },
      }, {
        id: 12,
        title: 'test document 11',
        body: 'Quis et eaque autem aut. Eum similique natus sunt blanditiis. Nostrum quia consequuntur. Distinctio alias ipsum. Omnis et non voluptatum dicta quia ea.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-06-05T11:53:33.457Z',
        updatedAt: '2017-06-05T11:53:33.457Z',
        userId: 1,
        User: {
          fullname: 'Samara Stracke PhD',
        },
      }, {
        id: 13,
        title: 'test document 12',
        body: 'Eum corrupti odit dolorem cupiditate. Officiis possimus eos. Quos et sint incidunt.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-06-05T11:53:33.457Z',
        updatedAt: '2017-06-05T11:53:33.457Z',
        userId: 1,
        User: {
          fullname: 'Samara Stracke PhD',
        },
      }, {
        id: 15,
        title: 'test document 14',
        body: 'Consequatur non odit quo. Ut mollitia incidunt porro quibusdam quidem accusantium. Rerum qui explicabo maiores ullam iste. Possimus ut dolorum praesentium et magni quidem et laboriosam fugit. Debitis quos perferendis aliquam sapiente nam velit.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-06-05T11:53:33.457Z',
        updatedAt: '2017-06-05T11:53:33.457Z',
        userId: 1,
        User: {
          fullname: 'Samara Stracke PhD',
        },
      }, {
        id: 16,
        title: 'test document 15',
        body: 'Qui est ut aut ea voluptate enim. Nulla fuga excepturi minus nihil. Corrupti at exercitationem ducimus in enim sed veritatis. Ducimus et voluptatem odit officia. Doloribus soluta aut assumenda perferendis ducimus. A officia praesentium pariatur qui.',
        access: 'public',
        ownerRoleId: 2,
        createdAt: '2017-06-05T11:53:33.457Z',
        updatedAt: '2017-06-05T11:53:33.457Z',
        userId: 1,
        User: {
          fullname: 'Samara Stracke PhD',
        },
      }],
      metadata: {
        page: 1,
        pageCount: 2,
        pageSize: 8,
        totalCount: 15,
      },
      count: 15,
    });

    // Assertion
    expect(state)
      .toEqual(expectedState);
  });

  it('should handle CREATE_DOCUMENT_BY_USER_SUCCESS actions', () => {
    const expectedState = {
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 6,
          username: 'q',
          fullname: 'q',
          roleId: 3,
          email: 'qq1bqe@email.com',
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
    };
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 6,
          username: 'q',
          fullname: 'q',
          roleId: 3,
          email: 'qq1bqe@email.com',
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
      type: 'CREATE_DOCUMENT_BY_USER_SUCCESS',
    });

    // Assertion
    expect(state)
      .toEqual(expectedState);
  });
});
