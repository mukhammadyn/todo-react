function TodoReducer (state, content) {

  switch (content.type) {

    case 'set todo': {

      return {

        ...state,
        todo: content.data

      }

    }

    case 'post todo': {

      const {todo, data} = content

      return {

        ...state,
        todo: [
          data,
          ...todo
        ]

      }

    }

    case 'remove todo': {
      const {todo, removedTodo} = content

      return {
        todo: [
          ...todo.slice(0, removedTodo),
          ...todo.slice(removedTodo + 1)
        ]
      }

    }

    case 'check': {

      const {todo, currentIndex, changeItem} = content

      return {

        todo: [
          ...todo.slice(0, currentIndex),
          changeItem,
          ...todo.slice(currentIndex + 1)
        ]

      }

    }

    case 'load': {

      return {

        ...state,
        load: true

      }

    }

    case 'removeLoad': {

      return {

        ...state,
        load: false

      }

    }

    case 'set error': {

      return {

        ...state,
        error: content.errorMessage

      }

    }

    case 'create': {

      return {

        ...state,
        create: true

      }

    }

    case 'created': {

      return {

        ...state,
        create: false

      }

    }

    default: {

      return state

    }

  }

}

export default TodoReducer
