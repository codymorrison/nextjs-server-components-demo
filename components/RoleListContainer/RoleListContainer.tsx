import React from "react";
import { getAuth0Client } from "../../app/lib/auth0Sdk";

type RoleListContainerProps = {};

export default async function RoleListContainer(props: RoleListContainerProps) {
  const auth0 = getAuth0Client();

  const roles = await auth0.getRoles();

  return (
    <div className="py-2">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <h1 className="text-xl text-neutral-600">Roles</h1>
      </div>
      <section className="text-gray-600">
        <div className=" px-5 py-10 mx-auto">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden sm:rounded">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Description
                        </th>

                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {roles.map((role, index) => (
                        <tr
                          key={role.id}
                          className={`${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }`}
                        >
                          <td className="px-3 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {role.name}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 ">
                            {role.description}
                          </td>

                          <td className="px-3 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <a
                              href="#"
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                ></path>
                              </svg>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
