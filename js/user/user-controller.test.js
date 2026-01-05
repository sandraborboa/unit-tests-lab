const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

// 1 prueba para la función add() que verifica un usuario que no está en la lista de usuarios..

test("verifies that added user isn't already in the list", () => {
  let user = new User(4, "Megumi", "megumi@gmail.com");
  //Se verifica que el usuario nuevo no este en la lista
  expect(userController.users).not.toContain(user);
  // Lo agrega
  userController.add(user);
  // Revisa que el usuario llamado Megumi haya sido agregado
  expect(userController.getUsers()).toContain(user);
});


// 1 prueba para la función remove() que verifica un usuario que no está en la lista de usuarios.
test("verifies if removed user is already included in user list", () => {
  const userController = new UserController();
  const user = new User(5, "Nokia", "nokia@gmail.com");
  // Revisa que no haya usuarios en la lista
  expect(userController.getUsers()).toEqual([]);
  // Trata de eliminar el usuario que creamos
  userController.remove(user);
  // Verifica que no haya pasado nada, pues el usuario eliminado No estaba en la lista
  expect(userController.getUsers()).toEqual([]);
});

// 2 pruebas unitarias para la función findByEmail()
test("findByEmail() returns the user when email exists", () => {
  const userController = new UserController();
  // Crea un usuario
  const user = new User(1, "Sachiko", "sachiko@gmail.com");
  // Agrega el usuario
  userController.add(user);
  // Llama la funcion findByEmail y le da el email del usuario creado como argumento
  const result = userController.findByEmail("sachiko@gmail.com");
  // El resultado coincidir con el usuario creado
  expect(result).toBe(user);
});

test("findByEmail() returns undefined when email does not exist", () => {
  const userController = new UserController();
  const user = new User(2, "Digsy", "digsy@gmail.com");
  // Agrega el usuario creado
  userController.add(user);
  // Llama la funcion findByEmail y le da un email inexistente como argumento
  const result = userController.findByEmail("digsyborboa@gmail.com");
  expect(result).toBeUndefined();
});

// 2 pruebas unitarias para la función findById()

test("findById() returns the user when the id exists", () => {
  const userController = new UserController();
  // Se crea un usuario con un id específico
  const user = new User(14, "Coco", "coco@gmail.com");
  // Se agrega el usuario
  userController.add(user);
  // Se busca el usuario usando su id
  const result = userController.findById(14);
  // Se espera que el resultado sea el mismo usuario agregado
  expect(result).toBe(user);
});

test("findById() returnts undefined when the id doesn't exist", () => {
  const userController = new UserController();
  // Se crea y agrega un usuario al controlador
  const user = new User(44, "Aki", "aki@gmail.com");
  userController.add(user);
  // Se prueba buscando un id que no existe en la lista
  const result = userController.findById(444);
  // Se espera que el resultado sea undefined porque no existe usuario con dicho id
  expect(result).toBeUndefined();
});