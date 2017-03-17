// jQuery Plugin: writeText
(function ($) {
    $.fn.writeText = function (writeContent, writeTime) {
        var eToWrite = this;
        var contentCharArr = writeContent.split("");
        var index = 0;
        setInterval(function () {
            if (index < contentCharArr.length) {
                eToWrite.text(eToWrite.text() + contentCharArr[index++]);
            }
        }, writeTime);
    };
})(jQuery);
// jQuery Plugin: eraseChars
(function ($) {
    $.fn.eraseChars = function (numEraseChars, eraseTime) {
        var eraseE = this;
        eraseE.text(function (_, txt) {
            return txt.slice(0, -1);
        });
        numEraseChars--;
        if (numEraseChars > 0) {
            setTimeout(function () {
                eraseE.eraseChars(numEraseChars, eraseTime);
            }, eraseTime);
        }
    };
})(jQuery);
// jQuery Plugin: randomTapOns
// Randomly turn camoflauged words visible
(function ($) {
    $.fn.randomTapOns = function (tapContent, camoColor, tapColor, tapTime, delimiter = false) {
        var tapE = this;
        tapE.empty();    // clear the element for good measure
        var tapContentArr = [];
        if (delimiter) {
            tapContentArr = tapContent.split(delimiter);
        }
        else {
            tapContentArr = tapContent.split(" ");
        }
        wrapContent(tapE, tapContentArr, camoColor);
        var selectedWords = [];
        var tapCounter = 0;
        setInterval(function () {
            if (tapCounter < tapContentArr.length) {
                var tapIndex = helper.generateRandomNo(0, (tapContentArr.length - 1));
                while (helper.checkIfPresent(selectedWords, tapIndex)) {
                    tapIndex = helper.generateRandomNo(0, (tapContentArr.length - 1));
                }
                selectedWords.push(tapIndex);
                $('#' + tapE.id + "_" + tapIndex.toString()).css('color', tapColor);
                tapCounter++;
            }
        }, tapTime);
    };
})(jQuery);
// wrapContentWords 
// wrap each index of the input contentArray in a span with a unique id
function wrapContent(wrapE, arr, camoColor, spaceAtEnd = true) {
    for (var i = 0; i < arr.length; i++) {
        var span = document.createElement('span');
        span.setAttribute("id", wrapE.id + "_" + i.toString());
        span.setAttribute("color", camoColor);
        if ((spaceAtEnd) && (i !== (arr.length - 1))) {
            arr[i] += "\x20";
        }
        span.innerHTML = arr[i];
        wrapE.append(span);
    }
}