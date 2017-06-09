module.exports = [
  {
    // Make JSDoc comments font normal for better readablility
    scope: 'comment.block.documentation',
    settings: {
      fontStyle: 'normal'
    }
  },
  {
    // Tags with type defs curly punctation
    scope: 'entity.name.type.instance.jsdoc punctuation.definition',
    settings: {
      foreground: '_light-orange',
      fontStyle: 'italic'
    }
  },
  {
    // Type def and method/prop NAMES
    scope: 'entity.name.type.instance.jsdoc',
    settings: {
      foreground: '_lighter-gray',
      fontStyle: 'italic'
    }
  },
  {
    // Built in JSdoc block tags
    scope: 'comment.block storage',
    settings: {
      foreground: '_light-orange'
    }
  },
  {
    // Custom doc tags
    scope: 'comment.block storage.custom',
    settings: {
      foreground: '_pink'
    }
  },
]
