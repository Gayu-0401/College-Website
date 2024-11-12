const editIndex = localStorage.getItem('editIndex'); // Get the edit index from localStorage
let data = JSON.parse(localStorage.getItem('data')) || [];

// Check if editing existing data
if (editIndex !== null && editIndex !== "-1") {
    const student = data[editIndex];
    if (student) {
        document.getElementById('name').value = student.name;
        document.getElementById('rollno').value = student.rollno;
        document.getElementById('dept').value = student.dept;
        document.getElementById('sem').value = student.sem;
        document.getElementById('email').value = student.email;
        document.getElementById('phone').value = student.phone;
        document.getElementById('address').value = student.address;
        document.getElementById('editIndex').value = editIndex; // Set the edit index for form submission
    }
    localStorage.removeItem('editIndex'); // Clear editIndex from localStorage after pre-filling form
} else {
    document.getElementById('editIndex').value = '-1'; // Default value for new entries
}

// Form submission handler
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    let name = document.getElementById('name').value;
    let rollno = document.getElementById('rollno').value;
    let dept = document.getElementById('dept').value;
    let sem = document.getElementById('sem').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let editIndex = document.getElementById('editIndex').value;

    // Save or update data
    if (editIndex == '-1') {
        // Add new entry
        data.push({ name, rollno, dept, sem, email, phone, address });
    } else {
        // Update existing entry
        data[editIndex] = { name, rollno, dept, sem, email, phone, address };
    }

    // Save data to localStorage and reset form
    localStorage.setItem('data', JSON.stringify(data));
    document.getElementById('studentForm').reset();
    document.getElementById('editIndex').value = '-1'; // Reset edit index for new entries

    // Redirect to student table page
    window.location.href = "./student-table.html";
});
