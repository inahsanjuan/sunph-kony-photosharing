define({ 

 });

// var posts = [];

// define({
//   onNavigate: function(){
//     alert("its running");
//   },

//   fetchMemberPosts: function(){
//     var userDocId = kony.string.split(selectedMember.path, "/")[7];
//     var url = "https://firestore.googleapis.com/v1beta1/projects/photoshare-890da/databases/(default)/documents/members/" + userDocId + "/posts";
//     var request = new kony.net.HttpRequest();

//     request.open(constants.HTTP_METHOD_GET, url);
//     request.send();

//     request.onReadyStateChange = function() {
//       if(this.readyState == constants.HTTP_READY_STATE_DONE){

//         this.response.documents.forEach(function(element) {
//           newArry.push({
//             lblPostUsername: selectedMember.username,
//             lblPostCaption: element.fields.caption.stringValue
//           });
//         });
//        	posts = newArry;
//       }
//     };
//   }
// });



// function fetchMemberPosts() {
//   var userDocId = kony.string.split(selectedMember.path, "/")[7];
//   var request = new kony.net.HttpRequest();
//   var url = "https://firestore.googleapis.com/v1beta1/projects/photoshare-890da/databases/(default)/documents/members/" + userDocId + "/posts";

//   var newArry = [];

//   request.onReadyStateChange= function(){
//     if(this.readyState == constants.HTTP_READY_STATE_DONE){

//       this.response.documents.forEach(function(element) {
//         newArry.push({
//           lblPostUsername: selectedMember.username,
//           lblPostCaption: element.fields.caption.stringValue
//         });
//       });

//       return newArry;
//     }
//   };

//   request.open(constants.HTTP_METHOD_GET, url);
//   request.send();
// }
