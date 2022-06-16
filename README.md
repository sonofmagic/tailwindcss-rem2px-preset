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

e.g: `1rem` -> `32px`

```js
// tailwind.config.js

module.exports = {
  presets: [
    require('tailwindcss-rem2px-preset').createPreset({
      fontSize: 32
    })
  ],
  // ...
}
```