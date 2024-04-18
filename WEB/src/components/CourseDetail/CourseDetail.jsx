/* eslint-disable react/prop-types */
export const CourseDetail = ({ courseInfo }) => {
  if (!courseInfo) {
    return (
      <h2>Loading...</h2> //aquí iría un componente personalizado de carga
    );
  } else {
    const { title, tutor_id, description, price, level, thumbnail, duration } =
      courseInfo;
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-10 mb-10 pt-5 pb-5 md:w-5/5 lg:w-3/4">
        <div className="md:flex md:items-center md:justify-center">
          <div className="md:flex-shrink-0 md:mb-4">
            <img
              className="mr-0 h-48 w-full object-contain md:w-48 sm:mr-auto sm:ml-auto"
              src={thumbnail}
              alt={title}
            />
          </div>
          <div className="p-5 md:w-full md:ml-4 md:mt-0 sm:p-6">
            <h2 className="text-gray-900 text-2xl font-bold mb-2">{title}</h2>
            <div className="uppercase tracking-wide text-xs text-indigo-500 font-semibold mb-2">
              Nivel: {level}
            </div>
            <p className="w-5/5 text-gray-700 text-base mb-4 sm:w-5/5">
              {description}
            </p>
            <div className="mb-2">
              <span className="text-black-600 mr-2 font-semibold">Tutor:</span>
              <span className="text-gray-900">
                {tutor_id.name} {tutor_id.lastName}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-black-600 mr-2 font-semibold">Precio:</span>
              <span className="text-gray-900">${price}</span>
            </div>
            <div className="mb-2">
              <span className="text-black-600 mr-2 font-semibold">
                Duración:
              </span>
              <span className="text-gray-900">{duration} semanas</span>
            </div>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 mt-3 md:mt-5">
              INSCRIBIRME
            </button>
          </div>
        </div>
      </div>
    );
  }
};
