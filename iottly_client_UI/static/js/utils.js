/*

Copyright 2015 Stefano Terna

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};


/* Courtesy of https://gist.github.com/peterbraden/752376 Needed to display timestamp in local timezone */
Date.prototype.toLocalISOString = function(){
  // ISO 8601
  var d = this
    , pad = function (n){return n<10 ? '0'+n : n}
    , tz = d.getTimezoneOffset() //mins
    , tzs = (tz>0?"-":"+") + pad(parseInt(tz/60))

  if (tz%60 != 0)
    tzs += pad(tz%60)

  if (tz === 0) // Zulu time == UTC
    tzs = 'Z'

   return d.getFullYear()+'-'
        + pad(d.getMonth()+1)+'-'
        + pad(d.getDate())+'T'
        + pad(d.getHours())+':'
        + pad(d.getMinutes())+':'
        + pad(d.getSeconds()) + tzs
}
