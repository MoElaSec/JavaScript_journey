function getSecondLargest(nums) {
  //Make it unique/delete duplicts ()change it to set then back to arr/list   
    let unique = [...new Set(nums)];
  
  //Get index of biggest number and delete it     
    let Largest_num_index = unique.indexOf(Math.max(...unique));
    unique.splice(Largest_num_index, 1);
    
  //get index of the largest num (after deleted the perv larg now this is actually the 2'nd)   
    let sec_larg = unique.indexOf(Math.max(...unique));

    return unique[sec_larg];  
}
