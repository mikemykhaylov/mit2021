// let twt_button = document.getElementById('twt');
// let footer = document.getElementsByClassName('footer-bottom-socials')[0]

// const puzzle_link = 'https://puzzle_entry_link_here'

// const twts = new Map();
// twts.set('Aiming to stack ship', ' on booster today')
// twts.set('Winds are too high today. Looks like', ' wind speed will be low enough to stack early tomorrow morning.')
// twts.set('Mechazilla will do this', ' for future rockets, but it’s not quite ready yet')
// twts.set('All 6 engines mounted', ' to first orbital Starship')
// twts.set('Installing Starship booster', ' engines for first orbital flight')
// twts.set('Completing feed system for 29', ' Raptor rocket engines on Super Heavy Booster')
// twts.set('New SpaceX Starlink cover', ' shows transfer orbit from Earth to Mars')
// twts.set('Super Heavy on road', ' & 7th Tower segment added')
// twts.set('Real pic of 2 ships', ' next to Starbase Tiki Bar on right')
// twts.set('Starlink simultaneously active', ' users just exceeded the strategically important threshold of 69,420 last night!')
// twts.set('Model S goes', ' to Plaid speed this week')
// twts.set('Ocean spaceport Deimos', ' is under construction for launch next year')
// twts.set('Aiming for extreme', ' precision with next gen Model Y – microns, not millimeters')
// twts.set('Working with Doge devs', ' to improve system transaction efficiency. Potentially promising.')
// twts.set('Cybertruck prototype', ' in New York this weekend')

// let keys = Array.from(twts.keys());

// let base_tweet = keys[Math.floor(Math.random() * keys.length)];
// let full_tweet = base_tweet + twts.get(base_tweet);

// twt_button.addEventListener('click', () => {
//     if(document.body.classList.contains('dark-mode')){
//         var box_exists = document.getElementsByClassName('write-tweet').length > 0;
//         if (box_exists) {
//             footer.removeChild(footer.lastChild);
//         } else {
//             var box = createEle('div', 'write-tweet')
//             var content_wrap = createEle('div', 'wt-content-wrap');

//             var header = createEle('div', 'wt-header');
//             header.appendChild(generateIcons(['close'])[0]);
//             header.getElementsByClassName('material-icons-outlined')[0].addEventListener('click', () => {
//                 footer.removeChild(footer.lastChild);
//             });

//             var icon = createEle('div', 'wt-icon');
//             var tweetwrap = createEle('div', 'wt-box');

//             // textarea & character count
//             var textbox = createEle('textarea', 'wt-textarea');
//             textbox.cols = 43;
//             textbox.rows = 4;
//             textbox.placeholder = "What's happening?";
//             textbox.appendChild(document.createTextNode(base_tweet));
//             textbox.setAttribute('maxlength', 240)
//             var char_count = createEle('div', 'count');
//             char_count.innerHTML = 240 - textbox.value.length;
//             textbox.onkeyup = function () {
//                 document.getElementsByClassName('count')[0].innerHTML = 240 - this.value.length;
//             };
//             textbox.oninput = function () {
//                 this.style.height = "5px";
//                 this.style.height = (this.scrollHeight)+"px";
//             };

//             // "Everyone can reply" text
//             var visibility = createEle('div', 'wt-vis');
//             var vis_text = createEle('div', 'wt-vis-text');
//             vis_text.appendChild(document.createTextNode('Everyone can reply'))
//             visibility.appendChild(generateIcons(['public'])[0])
//             visibility.appendChild(vis_text)
            
//             // footer
//             var foot = createEle('div', 'wt-box-foot');
//             var icons = createEle('div', 'wt-box-foot-icons');
//             var button_wrap = createEle('div', 'wt-box-foot-button-wrap');
//             var button = createEle('button', 'wt-box-foot-button');
//             button.addEventListener('click', () => {
//                 const twt_input = textbox.value.trim();
//                 if (twt_input === full_tweet) {
//                     document.body.scrollTop = document.documentElement.scrollTop = 0;
//                     moonToRocket();
//                 }
//             })
//             button.appendChild(document.createTextNode('Tweet'))

//             // html structure
//             addToDiv(box, [header, content_wrap])
//             addToDiv(content_wrap, [icon, tweetwrap]);
//             addToDiv(tweetwrap, [textbox, visibility, foot]);
//             addToDiv(foot, [icons, button_wrap]);
//             addToDiv(icons, generateIcons(['image', 'gif_box', 'poll', 'sentiment_satisfied', 'calendar_today']))
//             addToDiv(button_wrap, [char_count, generateIcons(['add_circle_outline'])[0], button]);

//             // add to footer
//             footer.appendChild(box);
//         }
//     }
// });

// function moonToRocket() {
//     let moon = document.getElementById("sun-moon-selector");
//     const freakInTheSheets = document.getElementById("freak-in-the-sheets");
//     const animationTime = 2500;

//     moon.classList.add("move");
//     moon.style.zIndex = "-100";
//     setTimeout(function() {
//         moon.classList.remove("move");
//         moon.style.zIndex = "4";
//     }, animationTime);

//     setTimeout(function() {
//         moon.src = "./assets/main/dark/moon_new.svg";
//     }, animationTime * .4);

//     setTimeout(function() {
//         var img = document.createElement('img');
//         img.src = './assets/main/dark/moon_new.svg';
//         img.id = 'sun-moon-selector';
//         img.onclick = function() {
//             window.location.href = puzzle_link;
//         };
//         moon.replaceWith(img);

//         let selector = document.getElementById("sun-moon-selector");
//         selector.addEventListener("mouseover", function() {
//             selector.style.boxShadow = "0px 0px 30px rgba(255, 249, 215, 0.6)";
//             selector.style.cursor = "pointer";
//         }, false);
//         selector.addEventListener("mouseleave", function() {
//             selector.style.boxShadow = "none";
//         }, false);
//     }, animationTime);

// }

// function createEle(element, class_name){
//     var created_ele = document.createElement(element);
//     created_ele.className = class_name;
//     return created_ele;
// }

// function addToDiv(parent, children){
//     for(let c of children){
//         parent.appendChild(c);
//     }
// }

// function generateIcons(icon_names){
//     let g_icons = [];
//     for(let x of icon_names){
//         let wrap = createEle('div', 'wt-box-foot-icons-wrap')
//         let i = createEle('span', 'material-icons-outlined');
//         i.appendChild(document.createTextNode(x));
//         wrap.appendChild(i)
//         g_icons.push(wrap);
//     }
//     return g_icons;
// }
