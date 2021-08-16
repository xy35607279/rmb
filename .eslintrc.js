module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb'
    // 'eslint:recommended'
  ],
  rules: {
    'vue/max-attributes-per-line': [2, {
      singleline: 5,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/name-property-casing': ['error', 'PascalCase'],
    // 对象中的getter和setter必须成对出
    'accessor-pairs': 2,
    // 箭头函数前后都必须有空格
    'arrow-spacing': [2, {
      before: true,
      after: true
    }],
    // 在同一行上，如果左花括号的右边有内容，那么它们之间必须有空格。如果右花括号的左边有内容，那么他们之间必须有空格
    'block-spacing': [2, 'always'],
    // 花括号和控制语句或是声明语句在同一行， one true brace style
    'brace-style': [2, '1tbs', {
      // 允许代码块的开闭花括号在同一行
      allowSingleLine: true
    }],
    // 变量使用驼峰命名
    camelcase: [1, {
      properties: 'always'
    }],
    // 不允许逗号拖尾
    'comma-dangle': [2, 'never'],
    // 逗号前面不允许有空格，逗号后面必须有空格
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    // 逗号放在数组元素、对象属性或声明变量之后，并且在同一行
    'comma-style': [2, 'last'],
    // 继承的类必须调用super(), 不继承的类不允许调用super()
    'constructor-super': 2,
    // 控制语句 if, else if else for while do, 和内容在同一行时，内容可以不用大括号包围，否则必须使用大括号
    curly: [2, 'multi-line'],
    // 表达式中的点号操作应该和属性在同一行
    'dot-location': [2, 'property'],
    // 文件末尾只有一个空行
    'eol-last': 2,
    // 强制使用类型安全的比较，例外情况：比较两个字面量的值，比较typeof 的值，与null比较
    eqeqeq: [2, 'smart'],
    // generator 函数 * 左右都要有空格
    'generator-star-spacing': [2, {
      before: true,
      after: true
    }],
    // 当函数的第一个参数是err或error，必须对这个参数进行处理
    'handle-callback-err': [2, '^(err|error)$'],
    indent: [2, 2, {
      SwitchCase: 1
    }],
    // 强制所有不包含单引号的 JSX 属性值使用单引号。
    'jsx-quotes': [2, 'prefer-single'],
    // 强制对象属性的冒号左右的空格, 冒号左边没有空格，冒号右边有空格
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }],
    // JavaScript 关键字 前后必须有空格
    'keyword-spacing': [2, {
      before: true,
      after: true
    }],
    // new 操作符用来创建某个特定类型的对象的一个实例
    // new 操作符时有首字母大写的函数
    // 允许调用首字母大写的函数时没有 new 操作符
    'new-cap': [2, {
      newIsCap: true,
      capIsNew: false
    }],
    // 当使用 new 关键字调用没有参数的构造函数时, 不可以省略后面圆括号
    'new-parens': 2,
    // 该规则禁止使用 Array 构造函数。
    'no-array-constructor': 2,
    // 当 arguments.caller 和 arguments.callee 被使用时，该规则将会发出警告。
    'no-caller': 2,
    // 调用 console 对象的方法, console.warn 除外
    'no-console': [1, { allow: ['warn'] }],
    // 类声明中变量的不允许修改
    'no-class-assign': 2,
    // 禁止在 if、for、while 和 do...while 语句中出现模棱两可的赋值操作符
    'no-cond-assign': 2,
    // 标记出修改用const关键字声明的变量
    'no-const-assign': 2,
    // 禁止在正则表达式中出现控制字符
    'no-control-regex': 0,
    // 禁止 debugger 语句
    'no-debugger': 2,
    // 禁止对变量使用 delete 操作符
    'no-delete-var': 2,
    // 禁止在函数定义或表达中出现重名参数。该规则并不适用于箭头函数或类方法，因为解析器会报告这样的错误。
    'no-dupe-args': 2,
    // 禁止类成员中重复名称的使用
    'no-dupe-class-members': 2,
    // 禁止在对象字面量中出现重复的键
    'no-dupe-keys': 2,
    // 禁止在 switch 语句中的 case 子句中出现重复的测试表达式
    'no-duplicate-case': 2,
    // 禁止在正则表达式中出现空字符集
    'no-empty-character-class': 2,
    // 标记出在解构对象和数组中的任何的空模式，每当遇到一个这样的空模式，该规则就会报告一个问题
    'no-empty-pattern': 2,
    // 通过禁止使用 eval() 函数来避免潜在地危险、不必要的和运行效率低下的代码。
    'no-eval': 2,
    // 禁止对 catch 子句中的异常重新赋值
    'no-ex-assign': 2,
    // 禁止直接修改内建对象的属性
    'no-extend-native': 2,
    // 避免不必要的 bind() 使用，并且当立即执行的函数表达式 (IIFE) 使用 bind()，但是没有一个合适的 this 值时，该规则会发出警告。此规则不会标记有函数参数绑定的bind() 的使用情况。
    // 箭头函数不能通过使用 bind() 设置它们的自己 this 值。此规则把所有使用bind() 的箭头函数标记为是有问题的。
    'no-extra-bind': 2,
    // 禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 2,
    // 禁止冗余的括号, 函数除外
    'no-extra-parens': [2, 'functions'],
    // 禁止 case 语句落空
    'no-fallthrough': 2,
    // 禁止浮点小数
    'no-floating-decimal': 2,
    // 禁止对 function 声明重新赋值
    'no-func-assign': 2,
    // 禁用隐式的eval()，消除使用 setTimeout()、setInterval() 或 execScript() 时隐式的 eval()。它们都可以接受一个 JavaScript 字符串代码作为第一个参数
    'no-implied-eval': 2,
    // 禁止 function 声明出现在嵌套的语句块中
    'no-inner-declarations': [2, 'functions'],
    // 禁止在 RegExp 构造函数中出现无效的正则表达式
    'no-invalid-regexp': 2,
    // 禁止不规则的空白
    'no-irregular-whitespace': 2,
    // 禁用迭代器
    // 防止因使用 __iterator__属性而出现的错误，并不是所有浏览器都实现了这个属性。因此，当遇到 __iterator__属性时，该规则将会发出警告。
    'no-iterator': 2,
    // 禁用与变量同名的标签，禁止使用同一作用域下的同名的变量做为标签，来创建更清晰的代码
    'no-label-var': 2,
    // 禁用标签语句 有了这个规则，no-label-var 就变得没有没有意义了
    'no-labels': [2, {
      allowLoop: false,
      allowSwitch: false
    }],
    // 禁用不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 2,
    // 禁止出现多个空格
    'no-multi-spaces': 2,
    // 禁止多行字符串
    'no-multi-str': 2,
    // 不允许多个空行, 最多空1行
    'no-multiple-empty-lines': [2, {
      max: 1
    }],
    // 不允许对原生对象重新赋值
    'no-native-reassign': 2,
    // 不允许对 in 表达式中的左操作数进行非运算
    'no-negated-in-lhs': 2,
    // 禁止使用 Object 构造函数
    'no-new-object': 2,
    // 不允许 new require
    'no-new-require': 2,
    // 禁止 Symbol new 操作符和 new 一起使用
    'no-new-symbol': 2,
    // 禁止原始包装实例， 在 JavaScript 中有3种原始类型包装对象：字符串，数字和布尔值。它们所代表的构造器分别为 String、Number 和 Boolean
    'no-new-wrappers': 2,
    // 禁止将全局对象当作函数进行调用， 禁止将 Math、JSON 和 Reflect 对象当作函数进行调用。
    'no-obj-calls': 2,
    // 禁用八进制字面量
    'no-octal': 2,
    // 禁止在字符串字面量中使用八进制转义序列， 自 ECMAScript 规范第5版起，字符串字面量中的八进制转义序列已经被弃用，不应该被使用。应该使用 Unicode 转义序列。
    'no-octal-escape': 2,
    // 当使用 _dirname 和 _filename 时不允许字符串拼接
    'no-path-concat': 2,
    // 禁用__proto__， __proto__ 属性在 ECMAScript 3.1 中已经被弃用，并且不应该在代码中使用。使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替
    'no-proto': 2,
    // 禁止重新声明变量
    'no-redeclare': 2,
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 2,
    // 禁止在返回语句中赋值，除非用括号把他们括起来
    'no-return-assign': [2, 'except-parens'],
    // 禁止自身赋值
    'no-self-assign': 2,
    // 禁止自身比较
    'no-self-compare': 2,
    // 不允许使用逗号操作符， 下情况除外：1.在初始化或者更新部分 for 语句时， 2.如果表达式序列被明确包裹在括号中。
    'no-sequences': 2,
    // 不要使用复用系统关键字或是重新赋值，全局对象的属性值 (NaN、Infinity、undefined)和严格模式下被限定的标识符 eval、arguments 在 JavaScript 中被认为是受限制的名称。将它们定义为其他含义可能会产生意想不到的结果，并使阅读代码的其他人感到困惑
    'no-shadow-restricted-names': 2,
    // 调用函数，函数名和()不允许留白
    'no-spaced-func': 2,
    // 禁用稀疏数组，也就是逗号之前没有任何元素的数组
    'no-sparse-arrays': 2,
    // 在构造函数中禁止在调用super()之前使用this或super
    'no-this-before-super': 2,
    // 限制可以被抛出的异常， 为保持异常抛出的一致性，通过禁止抛出字面量和那些不可能是 Error 对象的表达式
    'no-throw-literal': 2,
    // 禁用行尾空白
    'no-trailing-spaces': 2,
    // 禁用未声明的变量
    'no-undef': 2,
    // 不允许初始化变量值为， 在 JavaScript 中，声明一个变量但未初始化，变量会自动获得 undefined 作为初始值， 初始化变量值为 undefined 是多余的。
    'no-undef-init': 2,
    // 禁止使用令人困惑的多行表达式 https://cn.eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 2,
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 2,
    // 禁止可以表达为更简单结构的三元操作符， 禁止条件表达式作为默认的赋值模式
    'no-unneeded-ternary': [2, {
      defaultAssignment: false
    }],
    // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-unreachable': 2,
    // 禁止在 finally 语句块中出现控制流语句, JavaScript 暂停 try 和 catch 语句块中的控制流语句，直到 finally 语句块执行完毕。所以，当 return、throw、break 和 continue 出现在 finally 中时， try 和 catch 语句块中的控制流语句将被覆盖，这被认为是意外的行为。
    'no-unsafe-finally': 2,
    // 禁止未使用过的变量
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'none'
    }],
    // 禁用不必要的 .call() 和 .apply()
    'no-useless-call': 2,
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 2,
    // 禁用不必要的构造函数, ES2015 为没有指定构造函数的类提供了默认构造函数。因此，没有必要提供一个空的构造函数或只是简单的调用父类这样的构造函数
    'no-useless-constructor': 2,
    // 禁用不必要的转义
    'no-useless-escape': 0,
    // 禁止属性前有空白, JavaScript 允许在对象和它们的属性中间存在空白。然而，不一致的空格会使代码难以阅读，而且可能导致出错。如果对象和属性不在同一行上，这种情况，该规则允许使用空白，因为对级联的属性增加新行是一种很普遍的行为。
    'no-whitespace-before-property': 2,
    // 禁用 with 语句, with 是潜在的问题，因为它会在当前的with块中增加对象成员，使得区分实际块中的变量指的是什么难以区分。
    'no-with': 2,
    // 强制在函数 (var) 或块 (let 和 const) 范围使用多条声明， 这种做法也可以是你在调试的时候单步每个声明语句，而不是一下跳过所有声明。
    'one-var': [2, 'never'],
    // 强制操作符使用一致的换行符风格, 要求把换行符放在操作符后面, 但是 '?' 和 ':'要求把换行符放在操作符前面
    'operator-linebreak': [2, 'after', {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }],
    // 禁止块语句和类的开始或末尾有空行
    'padded-blocks': [2, 'never'],
    // 要求尽可能地使用单引号， 允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义。 允许字符串使用反勾号
    quotes: [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    // 要求在语句末尾使用分号, 忽略花括号在同一行（内容也就在同一行了）的语句块中的最后一个分号
    semi: [2, 'always', {
      omitLastInOneLineBlock: true
    }],
    // 分号前面不允许有空格，分号后不是行尾要有空格
    'semi-spacing': [2, {
      before: false,
      after: true
    }],
    // 块语句必须总是至少有一个前置空格
    'space-before-blocks': [2, 'always'],
    // 禁止函数圆括号之前有一个空格, 异步的箭头函数表达式，要求在参数的 ( 前面有一个空格
    'space-before-function-paren': [2, 'never'],
    // 禁止圆括号内的空格
    'space-in-parens': [2, 'never'],
    // 要求中缀操作符周围有空格
    'space-infix-ops': 2,
    // 单词类一元操作符，例如：new、delete、typeof、void、yield前后需要有空格，非单词一元操作符: -、+、--、++、!、!! 不需要空格
    'space-unary-ops': [2, {
      words: true,
      nonwords: false
    }],
    // 注释后留空白， // 或 /* 必须跟随至少一个空白。
    'spaced-comment': [2, 'always', {
      markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    // 禁止模板字符串中的花括号内出现空格
    'template-curly-spacing': [2, 'never'],
    // 要求调用 isNaN()检查 NaN
    'use-isnan': 2,
    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': 2,
    // 强制总是包裹立即执行的函数
    'wrap-iife': [2, 'any'],
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [2, 'both'],
    // 禁止Yoda条件 ， 字面量放在比较式的右边，例如：if (color === "red") {}
    yoda: [2, 'never'],
    // 建议使用const, 会标记那些使用 let 声明，但在初始化赋值后从未被修改过的变量
    'prefer-const': 2,
    // 要求花括号内有空格， 该规则强制在对象字面量、解构赋值 和 import/export 说明符的花括号中使用一致的空格
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    // 禁止在括号内使用空格
    'array-bracket-spacing': [2, 'never'],
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
};
