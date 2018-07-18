var source = "the dog said: a doggy dog world";
var search = "dog";
var results = find(source, search);
document.write("dog found " + results + " times");

function find(source, search)
{
  var count = 0;
  var done = false;
  
  while (!done)
  {
    var foundIndex = source.indexOf(search);
    
    if (foundIndex != -1) //found it!
    {
      count++;
      
      //change the string to store everything
      //after the search value found
      var nextIndex = foundIndex + search.length;
      source = source.substring(nextIndex);
    }
    else
    {
      done = true; //didn't find it!
    }
  }
  
  return count;
}