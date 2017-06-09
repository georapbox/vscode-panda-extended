module.exports = [
  {
    // Tagged template hbs``
    scope: 'meta.source.handlebars entity.name.tag',
    settings: {
      foreground: '_light-blue'
    }
  },
  {
    // {{, {{{, () and </>
    scope: 'punctuation.definition.expression, punctuation.definition.subexpression, punctuation.definition.block.unescaped, punctuation.definition.tag',
    settings: {
      fontStyle: 'italic',
      foreground: '_light-orange'
    }
  },
  {
    // name: 'Expression Name',
    scope: 'entity.name.function.expression',
    settings: {
      foreground: '_pink'
    }
  },
  {
    // Unescaped value
    scope: 'entity.unescaped.expression',
    settings: {
      foreground: '_purple'
    }
  },
  {
    // Expression parameter NAME
    scope: 'entity.expression variable.parameter.name',
    settings: {
      foreground: '_orange'
    }
  },
  {
    // Expression parameter VALUE
    scope: 'entity.expression variable.parameter.value',
    settings: {
      foreground: '_light-blue'
    }
  },
  {
    // Ember built in helpers
    scope: 'entity.expression support.function.builtin',
    settings: {
      foreground: '_light-pink'
    }
  },
  {
    // HTML tag names
    scope: 'entity.name.tag.html',
    settings: {
      foreground: '_light-orange'
    }
  },
  {
    // HTML attribute NAME
    scope: 'entity.other.attribute-name.handlebars',
    settings: {
      foreground: '_light-orange'
    }
  }
]
