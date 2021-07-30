
const readline = require('readline');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
console.log(`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
WWWWWWWW                           WWWWWWWW               lllllll                                                                                       UUUUUUUU     UUUUUUUU                                                         !!! 
W::::::W                           W::::::W               l:::::l                                                                                       U::::::U     U::::::U                                                        !!:!!
W::::::W                           W::::::W               l:::::l                                                                                       U::::::U     U::::::U                                                        !:::!
W::::::W                           W::::::W               l:::::l                                                                                       UU:::::U     U:::::UU                                                        !:::!
 W:::::W           WWWWW           W:::::W eeeeeeeeeeee    l::::l     cccccccccccccccc   ooooooooooo      mmmmmmm    mmmmmmm       eeeeeeeeeeee          U:::::U     U:::::U    ssssssssss       eeeeeeeeeeee    rrrrr   rrrrrrrrr   !:::!
  W:::::W         W:::::W         W:::::Wee::::::::::::ee  l::::l   cc:::::::::::::::c oo:::::::::::oo  mm:::::::m  m:::::::mm   ee::::::::::::ee        U:::::D     D:::::U  ss::::::::::s    ee::::::::::::ee  r::::rrr:::::::::r  !:::!
   W:::::W       W:::::::W       W:::::We::::::eeeee:::::eel::::l  c:::::::::::::::::co:::::::::::::::om::::::::::mm::::::::::m e::::::eeeee:::::ee      U:::::D     D:::::Uss:::::::::::::s  e::::::eeeee:::::eer:::::::::::::::::r !:::!
    W:::::W     W:::::::::W     W:::::We::::::e     e:::::el::::l c:::::::cccccc:::::co:::::ooooo:::::om::::::::::::::::::::::me::::::e     e:::::e      U:::::D     D:::::Us::::::ssss:::::se::::::e     e:::::err::::::rrrrr::::::r!:::!
     W:::::W   W:::::W:::::W   W:::::W e:::::::eeeee::::::el::::l c::::::c     ccccccco::::o     o::::om:::::mmm::::::mmm:::::me:::::::eeeee::::::e      U:::::D     D:::::U s:::::s  ssssss e:::::::eeeee::::::e r:::::r     r:::::r!:::!
      W:::::W W:::::W W:::::W W:::::W  e:::::::::::::::::e l::::l c:::::c             o::::o     o::::om::::m   m::::m   m::::me:::::::::::::::::e       U:::::D     D:::::U   s::::::s      e:::::::::::::::::e  r:::::r     rrrrrrr!:::!
       W:::::W:::::W   W:::::W:::::W   e::::::eeeeeeeeeee  l::::l c:::::c             o::::o     o::::om::::m   m::::m   m::::me::::::eeeeeeeeeee        U:::::D     D:::::U      s::::::s   e::::::eeeeeeeeeee   r:::::r            !!:!!
        W:::::::::W     W:::::::::W    e:::::::e           l::::l c::::::c     ccccccco::::o     o::::om::::m   m::::m   m::::me:::::::e                 U::::::U   U::::::Ussssss   s:::::s e:::::::e            r:::::r             !!! 
         W:::::::W       W:::::::W     e::::::::e         l::::::lc:::::::cccccc:::::co:::::ooooo:::::om::::m   m::::m   m::::me::::::::e                U:::::::UUU:::::::Us:::::ssss::::::se::::::::e           r:::::r                 
          W:::::W         W:::::W       e::::::::eeeeeeee l::::::l c:::::::::::::::::co:::::::::::::::om::::m   m::::m   m::::m e::::::::eeeeeeee         UU:::::::::::::UU s::::::::::::::s  e::::::::eeeeeeee   r:::::r             !!! 
           W:::W           W:::W         ee:::::::::::::e l::::::l  cc:::::::::::::::c oo:::::::::::oo m::::m   m::::m   m::::m  ee:::::::::::::e           UU:::::::::UU    s:::::::::::ss    ee:::::::::::::e   r:::::r            !!:!!
            WWW             WWW            eeeeeeeeeeeeee llllllll    cccccccccccccccc   ooooooooooo   mmmmmm   mmmmmm   mmmmmm    eeeeeeeeeeeeee             UUUUUUUUU       sssssssssss        eeeeeeeeeeeeee   rrrrrrr             !!! 
`)
reader.question (`Please create a user name!
`, function userName(username) {
    let user = {};
    if(username) {
        user.name = username;
        console.log(`Welcome ${user.name}!
        `)
    }
reader.question (`Please create your password, it must contain atleast 10 characters OR ELSE <3.
`, function passwordChecker(password) {
    if(password.length >= 10) {
        console.log(`SUCCESS! AREN'T YOU SMART!`);
    } else {
        console.log(`USER ERASED "${user.name}", if that is even your real name. START AT THE BEGINNING`)
    }
    reader.close()
})});

