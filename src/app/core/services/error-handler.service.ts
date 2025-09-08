import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ErrorHandlerService {
  handleError(error: HttpErrorResponse) {
    const errorMessage = this.extractErrorMessage(error);

    console.error("Erro tratado:", errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  private extractErrorMessage(error: HttpErrorResponse): string {
    if (!error) {
      return "Erro desconhecido";
    }

    // Erro do lado do cliente (rede, CORS, etc.)
    if (error.error instanceof ErrorEvent) {
      return `Erro de conexão: ${error.error.message}`;
    }

    // Erro do lado do servidor (API)
    if (!error.error) {
      return `Erro ${error.status}: ${error.statusText || "Erro desconhecido"}`;
    }

    if (typeof error.error === "string") {
      return error.error;
    }

    if (typeof error.error === "object") {
      const messages: string[] = [];

      // Extrai todas as mensagens do objeto de erro
      Object.entries(error.error).forEach(([, value]) => {
        if (Array.isArray(value)) {
          value.forEach((msg) => messages.push(msg));
        } else if (typeof value === "string") {
          messages.push(value);
        } else if (typeof value === "object" && value !== null) {
          // Trata objetos aninhados recursivamente
          const nestedMessages = this.extractMessagesFromNestedObject(value);
          messages.push(...nestedMessages);
        }
      });

      // Retorna todas as mensagens concatenadas em uma única string
      return messages.length > 0
        ? messages.join(". ")
        : `Erro ${error.status}: ${error.statusText || "Erro desconhecido"}`;
    }

    return "Erro desconhecido";
  }

  private extractMessagesFromNestedObject(obj: any): string[] {
    const messages: string[] = [];

    Object.entries(obj).forEach(([, value]) => {
      if (Array.isArray(value)) {
        value.forEach((msg) => messages.push(msg));
      } else if (typeof value === "string") {
        messages.push(value);
      } else if (typeof value === "object" && value !== null) {
        // Recursão para objetos aninhados mais profundos
        const nestedMessages = this.extractMessagesFromNestedObject(value);
        messages.push(...nestedMessages);
      }
    });

    return messages;
  }

  // Método auxiliar para extrair a mensagem de erro de qualquer tipo de erro
  getErrorMessage(error: any): string {
    if (error instanceof HttpErrorResponse) {
      return this.extractErrorMessage(error);
    }

    if (error instanceof Error) {
      return error.message;
    }

    if (typeof error === "string") {
      return error;
    }

    return "Erro desconhecido";
  }
}
