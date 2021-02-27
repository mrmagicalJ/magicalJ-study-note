module.exports = {
  base: '/study-note/',
  title: 'mrmagicalJ个人学习笔记',
  themeConfig: {
    nav: [
      {
        text: '算法',
        link: '/leetcode/',
      },
      {
        text: '设计模式',
        link: '/design/'
      },
      {
        text: '手写系列',
        link: '/hand/'
      },
      {
        text: '网络',
        link: '/network/'
      },
      {
        text: 'git',
        link: '/git/'
      },
      {
        text: 'js',
        link: '/js/'
      },
      // {
      //   text: 'js',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Vue', link: '/js/vue/' },
      //     { text: 'React', link: '/js/react/' },
      //   ]
      // },
      {
        text: 'vscode',
        link: '/vscode/'
      },
    ],
    lastUpdated: 'Last Updated',
    sidebar: {
      // '/algorithm/': [
      '/leetcode/': [
        {
          title: '算法',
          children: [
            '',
            '14-longest-common-prefix',
            '120-triangle',
            '167-two-sum-ii-input-array-is-sorted',
            '344-reverse-string',
            '350-intersection-of-two-arrays-ii',
            '557-reverse-words-in-a-string-iii',
            '696-count-binary-substrings',
            'shun-shi-zhen-da-yin-ju-zhen-lcof',
          ]
        }
      ],
      '/design/': [
        {
          title: '设计模式',
          children: [
            '',
            'adapter',
            'decorator',
            'factory',
            'proxy',
            'singleton',
          ]
        }
      ],
      '/hand/': [
        {
          title: '手写系列',
          children: [
            '',
            'bind',
            'jsonp',
            'instanceof',
            'debounce-and-throttle',
            'promise-all-limit',
          ]
        }
      ],
      '/network/': [
        {
          title: '网络',
          children: [
            '',
            'dns',
            'http-version',
            'network-layer',
            'message',
            'request-method',
            'catch-control',
            'http-request-process',
          ]
        }
      ],
      '/js/': [
        {
          title: 'js',
          children: [
            '',
            'async',
          ]
        },
        {
          title: 'Vue',
          children: [
            'vue/',
            'vue/vdom',
            'vue/init',
            'vue/skills',
          ]
        },
        {
          title: 'React',
          children: [
            'react/',
          ]
        },
      ],
      '/git/': [
        {
          title: 'git',
          children: [
            '',
          ]
        }
      ],
      '/vscode/': [
        {
          title: 'vscode',
          children: [
            '',
          ]
        }
      ],
    }
  }
}
