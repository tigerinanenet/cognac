void main(int choice, string page)
{
	if (choice == 218) {
		set_property("_cognac_choice216", to_int(get_property("_cognac_choice216")) + 1);
		
		// Try again next round.
		set_property("_cognac_doFlower", "");

		wait(75);
	}
	if (choice == 216 && get_property("_cognac_doFlower") != "") {
		run_choice(1);
		set_property("_cognac_doFlower", "");
	} 
}