# tailwindcss-rem2px-preset

Allow configuration for using px instead of rem.

Default: `1rem` -> `16px`, Of course you can custom this
## Usage

### Default

`1rem` -> `16px`
```js
// tailwind.config.js

module.exports = {
  presets: [
    require('tailwindcss-rem2px-preset')
  ],
  // ...
}
```

### Custom

For weapp developers, we need to use `rpx` instead of `rem`

e.g: `1rem` -> `32rpx`

```js
// tailwind.config.js

module.exports = {
  presets: [
    require('tailwindcss-rem2px-preset').createPreset({
      fontSize: 32,
      unit: 'rpx'
    })
  ],
  // ...
}
```