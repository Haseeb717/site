namespace :updatedataevent do
  desc "update data event"

  task :update_event => [:environment] do
    event_id = 1
    @event = Event.find(event_id)
    @event.update(price_ticket: "<h3>Valores</h3> <table><tbody> <tr> <td> <h4><strong>Setores&nbsp;</strong></h4> </td> <td> <h4><strong>Quintas e Sextas <br> &agrave;s21h&nbsp;</strong></h4>
                        </td> <td> <h4><strong>S&aacute;bados &agrave;s 16h30 <br>e 21h e Domingos &agrave;s <br>15h e 19h</strong></h4> </td> </tr> <tr> <td> <h4>Plateia VIP</h4> </td>
                        <td> <h4>R$ 290,00</h4> </td> <td> <h4>R$ 310,00</h4> </td> </tr> <tr> <td> <h4>Plateia Superior &nbsp; &nbsp;</h4> </td> <td> <h4>R$ 230,00</h4> </td> <td> <h4>R$ 250,00</h4> </td> </tr> <tr> <td> <h4>Frisa Superior</h4> </td> <td> <h4>R$ 220,00</h4> </td> <td> <h4>R$ 240,00</h4> </td> </tr> <tr> <td> <h4>Balc&atilde;o A (de A a F)&nbsp; &nbsp;</h4> </td> <td> <h4>R$ 170,00</h4> </td> <td> <h4>R$ 210,00</h4> </td> </tr>
<tr> <td> <h4>Balc&atilde;o B (de G a K)</h4> </td> <td> <h4>R$ 75,00</h4> </td> <td> <h4>R$ 75,00</h4> </td> </tr> <tr> <td> <h4>Frisa Balc&atilde;o &nbsp; &nbsp; &nbsp;</h4> </td> <td> <h4>R$ 75,00</h4> </td> <td> <h4>R$ 75,00</h4> </td> </tr> </tbody> </table>")
  end
 # bundle exec rake updatedataevent:update_event
end

