// src/Utils/file-import.js

export async function importFileToInternalJson() {
    return new Promise((resolve, reject) => {
        const input = document.createElement("input")
        input.type = "file"
        input.accept = ".json,.xml,.csv"

        input.onchange = async (event) => {
            const file = event.target.files[0]
            if (!file) {
                reject(new Error("No file selected"))
                return
            }

            const text = await file.text()

            try {
                if (file.name.endsWith(".json")) {
                    return resolve(JSON.parse(text))
                }

                if (file.name.endsWith(".xml")) {
                    const parser = new DOMParser()
                    const xmlDoc = parser.parseFromString(text, "text/xml")

                    const data = {
                        title: xmlDoc.getElementsByTagName("title")[0]?.textContent || "",
                        description: xmlDoc.getElementsByTagName("description")[0]?.textContent || "",
                        category: xmlDoc.getElementsByTagName("category")[0]?.textContent || "",
                        image: xmlDoc.getElementsByTagName("image")[0]?.textContent || ""
                    }

                    return resolve(data)
                }

                if (file.name.endsWith(".csv")) {
                    const lines = text.trim().split("\n")

                    const headers = lines[0].split(",").map(h => h.trim())

                    const values = lines[1]
                        .match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g)
                        .map(v => v.replace(/^"|"$/g, '').trim())

                    const data = {}
                    headers.forEach((key, i) => {
                        data[key] = values[i] || ""
                    })

                    return resolve(data)
                }

                reject(new Error("Unsupported file format"))

            } catch (err) {
                reject(new Error("Error parsing file"))
            }
        }

        input.click()
    })
}