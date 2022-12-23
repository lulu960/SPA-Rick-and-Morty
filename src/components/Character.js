import createElement from "../utils/createElement";

const Card = ({ id,name, src, tagName = 'div' } = {}) => createElement(
    {
      tagName,
      children: [
        {
            tagName: 'h2',
            text: name,
        },
        {
          tagName: 'img',
          attributes: {
            src: src
          }
        },
        {
          tagName: 'button',
          attributes: {
            'data-tabId': "link"+id,
            'id': "link"+id,
          },
          text: 'en savoir plus',
      },
      ]
    }
  )

export default Card