import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../Components/Options/Options";
import Quiz from "../Components/Quiz/Quiz";

const config = {
  botName: "Adopt-chat",
  initialMessages: [
    createChatBotMessage(`Hola! En que podemos ayudarte?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "adoptarQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Como puedo Adoptar?",
            answer:
              "ingresa a la pagina principal y busca la mascota que prefieras.",
            id: 1,
          },
          {
            question: "Hay algo mas que debo saber?",
            answer:
              "Si! para adoptar es necesario que seas mayor de 21 años y que puedas registrar tus datos.",
            id: 2,
          },
        ]
      }
    },
          {
            widgetName: "denunciarQuiz",
            widgetFunc: (props) => <Quiz {...props} />,
            props: {
              questions: [
                {
                  question: "Como puedo denunciar?",
                  answer:
                    "ingresa a la pagina principal y busca la mascota que prefieras.",
                  id: 3,
                },
                {
                  question: "Hay algo mas que debo saber?",
                  answer:
                    "Si! para denunciar es necesario que seas mayor de 21 años y que puedas registrar tus datos.",
                  id: 4,
                },
              ],
            },
          },
          {
            widgetName: "donarQuiz",
            widgetFunc: (props) => <Quiz {...props} />,
            props: {
              questions: [
                {
                  question: "Como puedo donar?",
                  answer:
                    "ingresa a la seccion denunciar y contacta con nosotros.",
                  id: 1,
                },
                {
                  question: "Hay algo mas que debo saber?",
                  answer:
                    "Si! para adoptar es necesario que seas mayor de 21 años y que puedas registrar tus datos.",
                  id: 2,
                },
              ],
            },
          },
        ],
      }

export default config;