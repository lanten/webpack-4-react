import path from 'path'

import webpack from 'webpack'
import chalk from 'chalk'

import webpackConfig from '../config/webpack.config'

import { clearDir, bigFont } from './utils'

console.log(chalk.yellowBright('=> 清空 dist'))
clearDir(path.join(__dirname, '../dist'))
console.log(chalk.yellowBright('=> dist 已清空'))

webpack(webpackConfig, (err, stats) => {
  if (err) {
    throw err
  }
  console.log(chalk.yellowBright('=> start building'))
  process.stdout.write(
    stats.toString({
      colors: true,
      hash: false,
      version: true,
      timings: true,
      assets: true,
      chunks: false,
      children: false,
      modules: false,
    }) + '\n\n'
  )

  if (stats.hasErrors() || stats.hasWarnings()) {
    return console.log(chalk.redBright(bigFont.FAILED))
  } else {
    return console.log(chalk.greenBright(bigFont.SUCCESS))
  }

})

