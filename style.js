async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chat-box");

  let userText = input.value;
  if (!userText) return;

  chatBox.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  const response = await fetch("http://localhost:5678/webhook/calendar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userText })
  });

  const data = await response.json();
  chatBox.innerHTML += `<p><b>Agent:</b> ${data.reply}</p>`;

  input.value = "";
}
