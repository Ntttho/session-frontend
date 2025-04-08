let tasks = [];
let id = 0;

while (true) {
    let choice = parseInt(prompt(`==========Menu==========
1. Thêm nhiệm vụ.
2. Hiển thị danh sách nhiệm vụ.
3. Cập nhật trạng thái nhiệm vụ theo ID.
4. Lọc nhiệm vụ theo trạng thái.
5. Sắp xếp nhiệm vụ theo trạng thái.
6. Thoát.
========================
Vui lòng nhập lựa chọn:`));

    switch (choice) {
        case 1:
            addTask();
            break;
        case 2:
            displayTasks();
            break;
        case 3:
            updateTaskStatus();
            break;
        case 4:
            filterTasks();
            break;
        case 5:
            sortTasks();
            break;
        case 6:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
    if (choice === 6) break;
}

function addTask() {
    id++;
    let name = prompt("Nhập tên nhiệm vụ:");
    let description = prompt("Nhập mô tả nhiệm vụ:");
    let startTime = prompt("Nhập thời gian bắt đầu:");
    let statusInput = parseInt(prompt("Nhập trạng thái (1: Hoàn thành, 0: Không hoàn thành):"));
    let status = statusInput === 1 ? "Hoàn thành" : "Không hoàn thành";

    let newTask = { id, name, description, startTime, status };
    tasks.push(newTask);
    alert("Thêm nhiệm vụ thành công!");
}

function displayTasks() {
    if (tasks.length === 0) {
        alert("Chưa có nhiệm vụ nào!");
        return;
    }
    let taskList = tasks.map(task => 
        `ID: ${task.id}, Name: ${task.name}, Description: ${task.description}, Start Time: ${task.startTime}, Status: ${task.status}`
    ).join("\n");
    alert(taskList);
}

function updateTaskStatus() {
    let id = parseInt(prompt("Nhập ID nhiệm vụ cần cập nhật trạng thái:"));
    let task = tasks.find(task => task.id === id);

    if (task) {
        let statusInput = parseInt(prompt("Nhập trạng thái mới (1: Hoàn thành, 0: Không hoàn thành):"));
        task.status = statusInput === 1 ? "Hoàn thành" : "Không hoàn thành";
        alert("Cập nhật trạng thái thành công!");
    } else {
        alert("Không tìm thấy nhiệm vụ!");
    }
}

function filterTasks() {
    let statusInput = parseInt(prompt("Nhập trạng thái để lọc (1: Hoàn thành, 0: Không hoàn thành):"));
    let status = statusInput === 1 ? "Hoàn thành" : "Không hoàn thành";
    let filteredTasks = tasks.filter(task => task.status === status);

    if (filteredTasks.length === 0) {
        alert(`Không có nhiệm vụ nào có trạng thái '${status}'!`);
        return;
    }

    let taskList = filteredTasks.map(task => `ID: ${task.id}, Name: ${task.name}, Status: ${task.status}`).join("\n");
    alert(taskList);
}

function sortTasks() {
    tasks.sort((a, b) => b.status - a.status);
    alert("Danh sách nhiệm vụ đã được sắp xếp theo trạng thái.");
    displayTasks();
}