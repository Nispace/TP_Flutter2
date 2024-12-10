
import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  final String baseUrl = 'http://172.16.191.254:3004/api/utilisateurs';

  Future<List<dynamic>> fetchUtilisateurs() async {
    final response = await http.get(Uri.parse(baseUrl)); 
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Erreur lors du chargement des utilisateurs');
    }
  }

  Future<void> addUtilisateur(String nom, String email) async {
    final response = await http.post(
      Uri.parse(baseUrl), 
      headers: {'Content-Type': 'application/json'},
      body: json.encode({'nom': nom, 'email': email}),
    );
    if (response.statusCode != 201) {
      throw Exception('Erreur lors de l\'ajout d\'un utilisateur');
    }
  }
}
