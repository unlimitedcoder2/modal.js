# modal.js
A web library for making easy and powerful modal messages

## Documentation

modal.*(Placeholder|Styling|Config|Function())*

##### Placeholders
**.name** - Defines the name of your modal

**.title** - Set the title of your modal

**.text** - Set the text of your modal

**.embed** - OPTIONAL embed own HTML

#### Styling
**.headerColor** - Color of header (Default #4DE1FF)

**.bgColor** - Color of modal background (Default #FFF)

**.titleColor** - Color of title (Default #000) 

**.textColor** - Color of text (Default #000) 

**.exitColor** - Color of exit button (Default #FFF)

**.opacity** - Level of background opacity (Default 0.5)

**.radius** - Level of modal radius (Default 10px)

**.font** - Select font for your modal via Google Fonts (Default https://fonts.googleapis.com/css?family=Roboto)

#### Config
**.conf.exitBtn** - Make exit button (Default true)

**.conf.hash** - Create hash on modal apply (Default true)

**.conf.resize** - Make modal resizable (Default false)

**.conf.exitOuter** - Wether modal can be closed by outside click (Default true)

**.conf.textSelection** - Allow text selection on modal (Default false)

**.conf.centerTitle** - Make title centered (Default false)

**.conf.centerText** - Make text centered (Default false)

#### Functions
**.apply()** - Make modal

**.destroy()** - Close modal