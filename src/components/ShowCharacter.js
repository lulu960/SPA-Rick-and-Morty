import createElement from "../utils/createElement";

const Card = ({ tagName = 'div', name, status, species, gender, origin, originURL, localisation, localisationURL,src  } = {}) => createElement(
    {
      tagName,
      children: [
        {
            tagName: 'h2',
            text: name,
        },
        {
            tagName: 'p',
            text: status,
        },
        {
            tagName: 'p',
            text: species,
        },
        {
            tagName: 'p',
            text: gender
        },
        {
            tagName: 'p',
            text: origin
        },
        {
            tagName: 'img',
            attributes: {
                src: originURL
            }
        },
        {
            tagName: 'p',
            text: localisation
        },
        {
            tagName: 'img',
            attributes: {
                src: localisationURL
            }
        },
        {
          tagName: 'img',
          attributes: {
            src: src
          }
        },
      ]
    }
  )

export default Card