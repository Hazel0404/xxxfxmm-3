document.getElementById("randomPickButton").addEventListener("click", function() {
    const names = ['田晞灿', '武子博', '张奥', '汤诚', '王相然', '高森', '李秉昊', '杨开程', '王程轩', '杜庚轩', '田宸赫', '李抒菲', '韩铠航', '宋祥宁', '田潇悦', '陈柯羽', '高篪', '任星宇'];
    const pickedName = names[Math.floor(Math.random() * names.length)];
    document.getElementById("pickedName").textContent = `被点到的人是：${pickedName}`;
});
