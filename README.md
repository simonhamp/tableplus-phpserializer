## What is this?

This is a TablePlus Plugin that allows you to deserialize serialized PHP stored in your tables. Once deserialized, the content is converted to a JSON string and copied to your clipboard so you can paste it wherever you need it - simply right-click on the cell containing serialized PHP.

## Requirements

TablePlus v2.9.1 and above.

## Installation

### Latest release

Download the latest [release](https://github.com/simonhamp/TablePlus-PHPSerializer/releases), unzip and double click on the plugin file (`PHPSerializer.tableplusplugin`) to install. Follow the TablePlus prompts to install the plugin. It only takes a few seconds.

### Build from source

```
git clone git@github.com:simonhamp/TablePlus-PHPSerializer.git
cd TablePlus-PHPSerializer/PHPSerializer.tableplusplugin
npm install
npm run build
open .
```

# How to use

1. Open a connection.
2. Open a table.
3. Right-click on a cell.
4. Click `PHP Deserialize` in the menu.
5. Paste the JSON result into your editor of choice.

# License

PHP Serializer is released under the MIT license. See [LICENSE](https://github.com/simonhamp/TablePlus-PHPSerializer/blob/master/LICENSE) for details.
