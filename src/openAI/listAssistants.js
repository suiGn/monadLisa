async function listAssistants() {
    const myAssistants = await monad.openai.beta.assistants.list({
      order: "desc",
      limit: "20",
    });
  
    console.log(myAssistants.data);
  }
  
  listAssistants();