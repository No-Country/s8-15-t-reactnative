export const getCurrentDateTime = () => {
    const date = new Date();
  
    const anio = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');
  
    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    
    const formattedDate = `${dia}/${mes}/${anio}`;
    const formattedTime = `${horas}:${minutos}PM`;
  
    return `${formattedDate}, ${formattedTime}`;
  }