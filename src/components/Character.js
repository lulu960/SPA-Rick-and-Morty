import createElement from "../utils/createElement";

const Card = ({ name, src, tagName = 'div' } = {}) => createElement(
    {
      tagName,
      children: [
        {
          tagName: 'img',
          attributes: {
            src: src || 'https://via.placeholder.com/150'
          }
        },
        {
          tagName: 'p',
          name,
        },
      ]
    }
  )

export default Card