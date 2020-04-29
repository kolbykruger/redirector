export const FileReader = {
    MyFunction: function(file) {
        let reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = function(evt) {

            let thingy = [];
            let domParser = new DOMParser();
            let parsedXML = domParser.parseFromString(evt.target.result, 'application/xml');
            let loc = parsedXML.querySelectorAll('loc');

            loc.forEach(item => {
                thingy.push(item.innerHTML)
            })

            return thingy;
        }
    }
};
