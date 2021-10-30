


const inputEl = document.getElementById("input-el")
let myLeads = []
//myLeads = JSON.parse(myLeads)
//console.log(typeof myLeads)

//myLeads.push("dssfdfpjjpkp")


//myLeads = JSON.stringify(myLeads)

//console.log(typeof myLeads)
//console.log(myLeads)
let tabBtn = document.getElementById("tab-btn")
const savebtn = document.getElementById("save-btn") 
let ulEl = document.getElementById("ul-el")
//let listItems = document.createElement("li").textContent = " "
let deleteBtn = document.getElementById("delete-btn")


deleteBtn.addEventListener("click", () =>{
	localStorage.clear()
	myLeads = []
	render(myLeads)

})

tabBtn.addEventListener("click", () =>{
	
   chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
    
    myLeads.push(tabs[0].url)
	localStorage.setItem("myLeads", JSON.stringify(myLeads))
	render(myLeads)


   })


	
})



const leadsfromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

console.log(leadsfromLocalStorage)


if(leadsfromLocalStorage ){
     myLeads =  leadsfromLocalStorage
     render(myLeads)
}



savebtn.addEventListener("click", () =>{
	myLeads.push(inputEl.value)
localStorage.setItem("myLeads", JSON.stringify(myLeads))


	console.log(localStorage.getItem("myLeads"))
	console.log(inputEl.value)
	render(myLeads)
	console.log("save btn is working");
})




function render(leads){
let listItems =""

for (let i = 0; i < leads.length; i++) {
	
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

    listItems += `
    <li> 
           <a  target='_blank'  href=' ${leads} '>   
           ${leads[i]} 
            </a>
    
     </li>`

   // listItems.innerHTML = myLeads[i]
    //ulEl.append(listItems)   
}
ulEl.innerHTML = listItems
inputEl.value = ""
	console.log(inputEl.value)
console.log(ulEl)
}
