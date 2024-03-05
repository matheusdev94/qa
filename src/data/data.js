import * as FileSystem from "expo-file-system";
import { mock } from "./mock";

const fileUri = `${FileSystem.documentDirectory}QA-Data.json`;

export const initFile = () => {
  writeFile({
    lists: mock,
  });
};

export async function readFile() {
  try {
    const fileData = await FileSystem.getInfoAsync(fileUri);

    if (!fileData.exists) {
      initFile();
    }

    if (fileData.exists) {
      const rawData = await FileSystem.readAsStringAsync(fileUri);
      let data = JSON.parse(rawData);
      return data;
    }
  } catch (error) {
    console.error("Erro ao ler dados do arquivo JSON:", error);
    return null;
  }
}
export async function writeFile(newData) {
  try {
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(newData));
  } catch (error) {
    console.error("Erro ao escrever dados no arquivo JSON:", error);
  }
}
