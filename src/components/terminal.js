import Terminal from 'react-console-emulator'
import React, { Component } from 'react'

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  },

  ls: {
    description: 'list directory contents',
    usage: 'ls <directory>',
    fn: () => 'aboutme.sh, cv.pdf',
  },

  whoami: {
    description: 'display effective user ID',
    usage: 'whoami',
    fn: () => 'noah',
  },

  cat: {
    description: 'concatenate and print files',
    usage: 'cat <file>',
    fn: function (args) {
      if (args == 'aboutme.sh') {
        return `blah blah blah`
      }
      if (args == 'aboutme.sh') {
        return `foo`
      }
    }
  },

  pwd: {
    description: 'Print the current directory',
    usage: 'pwd',
    fn: () => 'You are HERE.',
  },

  cd: {
    description: 'change directory',
    usage: 'cd <directory>',
    fn: function (args) {
      if (args == '..') {
        return `I said stay HERE!`
      }
      else if (args == '../..') {
        return `Have a flag:`
      }
      else {
        return 'Stay here...'
      }
    }
  }
}

export default class MyTerminal extends Component {
  render () {
    return (
      <Terminal
        commands={commands}
        welcomeMessage={'Welcome to the Noah\'s terminal!\nType \'help\' to see a list of commands.'}
        promptLabel={'noah@Purdue:~$'}
      />
    )
  }
}
