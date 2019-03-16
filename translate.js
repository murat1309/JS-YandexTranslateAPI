function Translate(word,language){

    this.apikey = "trnsl.1.1.20181211T142624Z.ee4c8fdac5a7846d.64ae3d5b5fda42efaf712f69a7e358192d1098a8";
    this.word = word;
    this.language = language;

    //XHR Object

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){ //Prototype'lerde içerde this kullanıcaksan arrow function kullanma.

    //Ajax

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    
    this.xhr.open("GET",endpoint);


    this.xhr.onload = () => {

        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null,text); 
        }
        else {
            callback("Bir hata oluştu",null);
        }
    }

    this.xhr.send();
    
};
Translate.prototype.changeParameters = function(newWord,newLanguage){

    this.word = newWord;
    this.language = newLanguage;
}