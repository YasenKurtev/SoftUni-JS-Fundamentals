function extractFile(string) {

    let index = string.lastIndexOf('\\');
    let file = string.substring(index + 1, string.length);

    let index1 = file.lastIndexOf('.');
    let fileName = file.substring(0, index1);
    let fileExtension = file.substring(index1 + 1, file.length);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')